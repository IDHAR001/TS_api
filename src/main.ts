import server from "./app";

if (require.main === module) {
  (async () => {
    const port = parseInt(process.env.PORT || "8080", 10);
    const expressServer = server.listen(port, () => {
      console.log("listening the port :>>", port);
    });
    // expressServer.setTimeout(1);
  })();
}
