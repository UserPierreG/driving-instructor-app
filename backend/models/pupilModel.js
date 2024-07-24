const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const progressRecordSchema = new Schema({
  variable: { type: String, required: true },
  stage: {
    type: String,
    enum: [
      "Introduced",
      "Talk Through",
      "Prompted",
      "Rarely Prompted",
      "Independent",
    ],
    required: true,
  },
});

const pupilSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    eMail: { type: String, required: true },
    progressRecords: [progressRecordSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pupils", pupilSchema);
