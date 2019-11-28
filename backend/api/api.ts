import * as express from 'express';
import {accessControl} from './functions/core/accessControl';
import {routes} from './routes/routes';
import {useFirebaseApp} from './functions/core/firebaseApp';
import {useAuthorization} from './functions/core/authorization';

// Express server
const app = express();

const PORT = process.env.PORT || 8081;

app.enable('trust proxy');

app.use(accessControl);

app.use(express.json());

app.use(useFirebaseApp);
app.use(useAuthorization);

// Routes/APIs
app.use(routes);

app.get('*', (req, res) => {
    res.status(404).end();
});

// Start up the Node server
app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
});
