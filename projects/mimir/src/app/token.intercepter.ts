import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';

import {BehaviorSubject, from, NEVER, Observable, throwError} from 'rxjs';
import {catchError, filter, finalize, switchMap, take, tap} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  isRefreshingToken = false;
  tokenSubject = new BehaviorSubject<string>(null);

  constructor(
    public afAuth: AngularFireAuth
  ) {}

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: 'Bearer ' + token }});
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.afAuth.idToken.pipe(
      take(1),
      switchMap(token => next.handle(this.addToken(req, token))),
      tap(console.log),
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          switch ((error as HttpErrorResponse).status) {
            case 400:
              return this.handle400Error(error);
            case 401:
              return this.handle401Error(req, next);
          }
        } else {
          return throwError(error);
        }
      })
    );
  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.tokenSubject.next(null);

      return from(this.afAuth.auth.currentUser.getIdToken(true)).pipe(
        switchMap(newToken => {
          if (newToken) {
            this.tokenSubject.next(newToken);
            return next.handle(this.addToken(req, newToken));
          }

          // If we don't get a new token, we are in trouble so logout.
          return from(this.afAuth.auth.signOut()).pipe(switchMap(() => NEVER));
        }),
        catchError(error => {
          // If there is an exception calling 'refreshToken', bad news so logout.
          return from(this.afAuth.auth.signOut()).pipe(switchMap(() => NEVER));
        }),
        finalize(() => {
          this.isRefreshingToken = false;
        })
      );
    } else {
      return this.tokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next.handle(this.addToken(req, token));
        })
      );
    }
  }

  handle400Error(error) {
    if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
      // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
      return from(this.afAuth.auth.signOut()).pipe(switchMap(() => NEVER));
    }

    return throwError(error);
  }
}
