import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import path from 'path'


const surveyMode = [
    'TRADITIONAL_VERSION',
    'GAMIFIED_VERSION',
    'TRADGAM_VERSION',
    'TRADGAM_VERSION',
    'BADGE_VERSION',
    'LEADERBOARD_VERSION',
    'NARRATIVE_VERSION',
    'BLN_VERSION',
    'BLN_VERSION'
]

const typeDefs = `
    type Answers {
        question: String
    }
    type Survey {
        result: [Answers],
        averageTime: Int,
        timeTaken: Int,
        badgesCollected: Int,
        pointsObtained: Int,
        positionInLeaderboard: Int
    }
    type Query {
        surveyMode: String
    }
    type Mutation {
        submitSurvey()
    }
`
const resolvers = {
    Query: {
        surveyMode: () => surveyMode.pop()
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})


const app: express.Application = express()
const PORT = process.env.PORT || 4000

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// app.use(express.static(`${path.resolve('./')}/client/build`))

// app.get('/submit', (req, res) => {
//     res.send('Reached API')
// })
// app.get('*', (req, res) => {
//     res.sendFile(`${path.resolve('./')}'/client/build/index.html`)
// })


// app.listen(PORT, () => `server listening at ${PORT}`)
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
});