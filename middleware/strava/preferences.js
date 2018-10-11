const AthletePreferences = require('../../model/athletePreferences');

module.exports = {

    Get: function (id) {
  
      return new Promise((resolve, reject) => {
  
        AthletePreferences.findOne({
          'strava_id': id
        }, function (err, preferences) {
  
          if (err) {
            return next(err);
          }
  
          if (!preferences) {
            reject('No preferences found');
          } else {
            resolve(preferences);
          }
  
        });

      });
  
    },

    Update: function(preferences, strava_id) {

        return new Promise((resolve, reject) => {

            AthletePreferences.findOne({
                'strava_id': strava_id
              }, function (err, result) {

                if (err) {
                  return next(err);
                }

                result.distance_measurement = preferences.distance_measurement;
                result.weekly_progress_max = preferences.weekly_progress_max;

                result.save(function(err) {
                    if(err) {
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                });
                
              });
            
        });
    
    }

  }