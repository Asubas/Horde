module.exports = {
    fix: true,
    extends: [
     'stylelint-config-standard',
     'stylelint-config-prettier',
    ],
    rules: {
     'no-empty-source': null,
     'selector-class-pattern' : new RegExp('a-z','i'),
     'at-rule-no-unknown': [
      true,
      {
       ignoreAtRules: ['define-mixin', 'mixin'],
      },
     ],
     'media-feature-name-no-unknown': [
      true,
      { ignoreMediaFeatureNames: 'min--moz-device-pixel-ratio' },
     ],
    },
   
    ignoreFiles: ['public/*.*', 'build/*.*'],
   };