const express = require("express");
const mongoose = require("mongoose");
const videoRoutes = require("./routes/videoRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const playlistRoutes = require("./routes/playlistRoutes");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017/streaming", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/videos", videoRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/playlists", playlistRoutes);

const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
