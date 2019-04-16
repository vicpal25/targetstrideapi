
const sqldb = require('../sqldb');
const Sequelize = require('sequelize');

let Market = sqldb.Market;


const {graphql, buildSchema} = require('graphql');

let videos = [];

for (let index = 0; index < 5; index++) {

      videos.push({
        id: index + 100,
        title: 'The title - ' + index,
        duration: index * 20,
        watched: false

      })

}

const schema = buildSchema(`
# Defines all the things that we can "start" with
# Describes what is possibly, and perhaps more importantly what's not possible
type Video {
  id: ID,
  title: String,
  duration: Int,
  watch: Boolean
}

type Query {
  video: Video,
  videos: [Video]
}
type Schema {
  query: Query
}
`);

const resolvers = {

  video: () => ({
    id: 1,
    title: 'yo',
    duration: 343,
    watch: true
  }),
  videos: () => videos,
};

const query = `{  videos {id, title } }`;

exports.getMarkets = function (req, res, next) {

        const Op = Sequelize.Op;

            Market.findAll()
            .then(function(entity) {            
                res.status('200').json(entity);        
            })
          .catch(function(err) {
            res.status('500').json(err);
            return err;
          })    

        
}
