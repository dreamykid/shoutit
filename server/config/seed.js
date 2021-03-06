/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';
var Thing = sqldb.Thing;
var Shout = sqldb.Shout

Thing.sync()
  .then(function() {
    return Thing.destroy({ where: {} });
  })
  .then(function() {
    Thing.bulkCreate([{
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    }]);
  });

Shout.sync()
  .then(function() {
    return Shout.destroy({ where: {} });
  })
  .then(function() {
    Shout.bulkCreate([{
      content: 'It is 3 am now and here I am, do I have to say more.?'
    }, {
      content: 'This is why someone invented a smoking area. If there is one USE IT! I dont want to choke over the scent of cigars while I am eating my sandwich!'
    }, {
      content: 'The only one I know is really bad at it. I am not sure if this makes him funny, or even more annoying' 
    }]);
  });


