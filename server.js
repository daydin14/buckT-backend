// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

// Initialize Express App
const app = express();

// Configure App Settings
require("dotenv").config();
const { PORT = 4000, MONGODB_URL } = process.env;