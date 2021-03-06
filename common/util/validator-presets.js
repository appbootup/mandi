const PRESETS = {}
const _ = require('lodash')

/**
 * Validator presets
 *
 * Exports presets used by Validator class across the app
 */

// Email address
PRESETS.email = {
  label : 'Email address',
  rules : {
    regex     : 'email',
    required  : true,
    type      : 'string',
    minLength : 4,
    maxLength : 100
  }
}

// URL
PRESETS.url = {
  label : 'URL',
  rules : {
    required : true,
    regex    : 'url',
    type     : 'string'
  }
}

// URL
PRESETS.slug = {
  label : 'Slug',
  rules : {
    required  : true,
    regex     : 'slug',
    type      : 'string',
    maxLength : 500
  }
}

// Flag (Boolean)
PRESETS.flag = {
  label : 'Flagged',
  rules : {
    required : false,
    type     : 'boolean'
  }
}

// URL
PRESETS.color = {
  label : 'Color',
  rules : {
    regex    : 'color',
    required : false,
    type     : 'string'
  }
}

// Password (6-10 characters)
PRESETS.password = {
  label : 'Password',
  rules : {
    required  : true,
    type      : 'string',
    minLength : 6,
    maxLength : 100
  }
}

// Name between 2-150 characters
PRESETS.name = {
  label : 'Name',
  rules : {
    required  : true,
    type      : 'string',
    minLength : 1,
    maxLength : 150
  }
}

// Phone No.
PRESETS.phone = {
  label : 'Phone number',
  rules : {
    required  : false,
    type      : 'string',
    minLength : 1,
    maxLength : 150,
    regex     : 'phone'
  }
}

// Title (2-150 characters)
PRESETS.title = {
  label : 'Title',
  rules : {
    required  : true,
    type      : 'string',
    minLength : 1,
    maxLength : 150
  }
}

// Content (optional, max 1500 characters)
PRESETS.content = {
  label : 'Content',
  rules : {
    required  : false,
    type      : 'string',
    maxLength : 1500
  }
}

// Content optional, max 1500 characters)
PRESETS.html = _.extend({}, PRESETS.content, {
  label : 'HTML'
})

// Markdown
PRESETS.html = _.extend({}, PRESETS.content, {
  label : 'Markdown'
})

// Amount (number)
PRESETS.amount = {
  label : 'Amount',
  rules : {
    required : false,
    type     : 'number'
  }
}

// File (optional)
PRESETS.file = {
  label : 'File',
  rules : {}
}

// Image (optional)
PRESETS.image = _.extend({}, PRESETS.file, {
  label : 'Image',
  rules : {}
})

module.exports = PRESETS