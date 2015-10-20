'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL +
            process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/shout'
  },
  sequelize: {
    uri: 'postgres://vltpneccejwcxf:pAWmJEQD_A8qYun0wbPyXHv-Xa@ec2-107-21-219-142.compute-1.amazonaws.com:5432/d3aqormo3lobai'
  },

  seedDB: true
};
