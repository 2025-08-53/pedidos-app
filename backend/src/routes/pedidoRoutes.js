const express = require("express");
const router = express.Router();
const controller = require("../controllers/pedidoController");

router.post("/pedidos", controller.criarPedido);
router.get("/pedidos", controller.listarPedidos);

module.exports = router;