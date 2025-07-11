const mongoose = require('mongoose');

const acceleratorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  websiteUrl: {
    type: String,
    default: ''
  },
  hq: {
    type: String,
    required: true,
    trim: true
  },
  batchFrequency: {
    type: String,
    required: true
  },
  stage: [{
    type: String,
    enum: ['Idea', 'MVP', 'Early Revenue', 'Growth']
  }],
  fundingOffered: {
    type: String,
    required: true
  },
  programDuration: {
    type: String,
    required: true
  },
  servicesProvided: {
    type: String,
    default: ''
  },
  sectors: [{
    type: String,
    enum: ['Agnostic', 'Fintech', 'Healthtech', 'Edtech', 'E-commerce', 'SaaS', 'AI/ML', 'Deep Tech', 'Clean Tech', 'Other']
  }],
  applicationLink: {
    type: String,
    default: ''
  },
  pastCohorts: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for better search performance (without array fields in text index)
// Remove text index that's causing issues with array fields
acceleratorSchema.index({ name: 1, hq: 1 });

module.exports = mongoose.model('AcceleratorNew', acceleratorSchema);