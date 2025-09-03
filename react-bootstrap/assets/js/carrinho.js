
function adicionarAoCarrinho(nome, preco, img) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push({ nome, preco, img });
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(nome + " adicionado ao carrinho!");
    atualizarBadgeCarrinho();
}

function atualizarBadgeCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let badge = document.getElementById("carrinho-badge");
    if (badge) {
        badge.textContent = carrinho.length;
        badge.style.display = carrinho.length > 0 ? "inline-block" : "none";
    }
}

function limparCarrinho() {
    localStorage.removeItem("carrinho");
    document.getElementById("lista-carrinho").innerHTML = "";
    document.getElementById("total-carrinho").textContent = "0.00";
    atualizarBadgeCarrinho();
}

function finalizarPedido() {
    alert("Pedido finalizado com sucesso!");
    limparCarrinho();
}

window.onload = atualizarBadgeCarrinho;
