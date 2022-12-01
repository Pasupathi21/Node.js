import express, { Express, Request, Response } from 'express'

const app:Express = express();
const route = express.Router()

route.get('/', (req: Request, res: Response) => {
    console.log('GET')
    res.send({
        message: 'WORKING...'
    })
})

app.listen(2021, (): void => {
    console.log(`Reunning on port 2021`);
})