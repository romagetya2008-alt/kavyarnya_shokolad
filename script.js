
// =====================================
// ТОВАРИ
// =====================================

var products = {

    espresso: {

        name: "Еспресо",

        price: 60,

        description:
            "Насичений ароматний еспресо з виразним смаком."

    },


    cappuccino: {

        name: "Капучино",

        price: 80,

        description:
            "Еспресо з ніжною молочною пінкою."

    },


    flatwhite: {

        name: "Флет Вайт",

        price: 85,

        description:
            "Подвійний еспресо з ніжним молоком."

    },


    latte: {

        name: "Латте",

        price: 85,

        description:
            "Ніжна кава з великою кількістю молока."

    },


    americano: {

        name: "Американо",

        price: 65,

        description:
            "Класична чорна кава з насиченим ароматом."

    },


    raf: {

        name: "Раф",

        price: 95,

        description:
            "Ніжний вершковий кавовий напій."

    },


    dopio: {

        name: "Допіо",

        price: 75,

        description:
            "Подвійна порція насиченого еспресо."

    },


    cheesecake: {

        name: "Чізкейк",

        price: 120,

        description:
            "Ніжний вершковий десерт з легкою текстурою."

    },


    tiramisu: {

        name: "Тірамісу",

        price: 130,

        description:
            "Класичний італійський десерт з маскарпоне."

    },


    croissant: {

        name: "Круасан",

        price: 90,

        description:
            "Хрусткий французький круасан."

    }

};


// =====================================
// ПОТОЧНИЙ ТОВАР
// =====================================

var currentProduct = null;


// =====================================
// ВІДКРИТИ ТОВАР
// =====================================

function openProduct(productId) {

    currentProduct = products[productId];


    // Назва

    $("#modal-title").text(
        currentProduct.name
    );


    // Опис

    $("#modal-description").text(
        currentProduct.description
    );


    // Ціна

    $("#modal-price").text(
        currentProduct.price
    );


    // При відкритті
    // прибираємо старі добавки

    $(".extra").prop(
        "checked",
        false
    );


    // Рахуємо ціну

    updateTotal();


    // Показуємо вікно

    $("#product-modal").css(
        "display",
        "flex"
    );

}


// =====================================
// ЗАКРИТИ ТОВАР
// =====================================

function closeProduct() {

    $("#product-modal").fadeOut(200);

}


// =====================================
// ПІДРАХУНОК ЦІНИ
// =====================================

function updateTotal() {

    if (!currentProduct) {

        return;

    }


    var total =
        currentProduct.price;


    $(".extra:checked").each(
        function() {

            total += Number(
                $(this).val()
            );

        }
    );


    $("#total-price").text(
        total
    );

}


// =====================================
// КОЛИ ЗМІНИЛАСЯ ДОБАВКА
// =====================================

$(".extra").change(
    function() {

        updateTotal();

    }
);


// =====================================
// КЛІК ПОЗА ВІКНОМ
// =====================================

$("#product-modal").click(
    function(event) {

        if (
            event.target === this
        ) {

            closeProduct();

        }

    }
);


// =====================================
// ESC
// =====================================

$(document).keydown(
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeProduct();

        }

    }
);