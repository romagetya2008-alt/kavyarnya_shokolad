// =====================================
// ТОВАРИ
// =====================================

var products = {

"bubble-latte": `
    <h2>Бабл Лате</h2>

    <p class="price">98 ₴</p>

    <h3>Кава</h3>

    <ul>
        <li>Кава купаж</li>
        <li>Кава Арабіка +5 ₴</li>
        <li>Кава Декаф +5 ₴</li>
    </ul>

    <h3>Молоко 400 мл</h3>

    <ul>
        <li>Звичайне</li>
        <li>Кокосове +20 ₴</li>
        <li>Безлактозне +15 ₴</li>
        <li>Бананове +20 ₴</li>
        <li>Мигдалеве +20 ₴</li>
    </ul>
`,

"bubble-strawberry-coconut": `
    <h2>Бабл полуниця / кокос</h2>

    <p class="price">98 ₴</p>

    <h3>Смаки</h3>

    <ul>
        <li>Полуничний</li>
        <li>Кокосовий</li>
    </ul>

    <h3>Молоко 400 мл</h3>

    <ul>
        <li>Звичайне</li>
        <li>Кокосове +20 ₴</li>
        <li>Безлактозне +15 ₴</li>
        <li>Бананове +20 ₴</li>
        <li>Мигдалеве +20 ₴</li>
    </ul>
`,

"bubble-cocoa": `
    <h2>Бабл Какао</h2>

    <p class="price">98 ₴</p>

    <h3>Какао 400 мл</h3>

    <ul>
        <li>Солодке</li>
        <li>Натуральне +5 ₴</li>
    </ul>

    <h3>Молоко 400 мл</h3>

    <ul>
        <li>Звичайне</li>
        <li>Кокосове +20 ₴</li>
        <li>Безлактозне +15 ₴</li>
        <li>Бананове +20 ₴</li>
        <li>Мигдалеве +20 ₴</li>
    </ul>
`,
    
    espresso: `
        <h2>Еспресо</h2>

        <p class="price">40 ₴</p>

        <h3>Кава</h3>

        <ul>
            <li>Кава купаж</li>
            <li>Кава Арабіка +5 ₴</li>
            <li>Кава Декаф +10 ₴</li>
        </ul>

        <h3>Додатки</h3>

        <ul>
            <li>Еспресо купаж +10 ₴</li>
            <li>Еспресо арабіка +15 ₴</li>
            <li>Сироп</li>
        </ul>

        <h3>Молоко 180 мл</h3>

        <ul>
            <li>Звичайне +8 ₴</li>
            <li>Кокосове +15 ₴</li>
            <li>Безлактозне +15 ₴</li>
            <li>Мигдалеве +15 ₴</li>
            <li>Бананове +15 ₴</li>
        </ul>
    `,


    cappuccino: `
        <h2>Капучино</h2>

        <h3>Розмір</h3>

        <ul>
            <li>250 мл — 62 ₴</li>
            <li>400 мл — 68 ₴</li>
            <li>500 мл — 84 ₴</li>
        </ul>

        <h3>Кава</h3>

        <ul>
            <li>Кава купаж</li>
            <li>Кава Арабіка +5 ₴</li>
            <li>Кава Декаф +10 ₴</li>
        </ul>

        <h3>Молоко 250 мл</h3>

        <ul>
            <li>Звичайне</li>
            <li>Кокосове +15 ₴</li>
            <li>Бананове +15 ₴</li>
            <li>Безлактозне +10 ₴</li>
            <li>Мигдалеве +15 ₴</li>
        </ul>

        <h3>Додатки</h3>

        <ul>
            <li>Еспресо купаж +10 ₴</li>
            <li>Еспресо арабіка +15 ₴</li>
            <li>Сироп</li>
        </ul>
    `,


    flatwhite: `
        <h2>Флет Вайт</h2>

        <p class="price">78 ₴</p>

        <h3>Кава</h3>

        <ul>
            <li>Кава купаж</li>
            <li>Кава Арабіка +5 ₴</li>
            <li>Кава Декаф +10 ₴</li>
        </ul>

        <h3>Молоко 250 мл</h3>

        <ul>
            <li>Звичайне</li>
            <li>Кокосове +15 ₴</li>
            <li>Бананове +15 ₴</li>
            <li>Безлактозне +10 ₴</li>
            <li>Мигдалеве +15 ₴</li>
        </ul>

        <h3>Додатки</h3>

        <ul>
            <li>Еспресо купаж +10 ₴</li>
            <li>Еспресо арабіка +15 ₴</li>
            <li>Сироп</li>
        </ul>
    `,


    latte: `
        <h2>Латте</h2>

        <h3>Розмір</h3>

        <ul>
            <li>250 мл — 62 ₴</li>
            <li>400 мл — 68 ₴</li>
            <li>500 мл — 74 ₴</li>
        </ul>

        <h3>Кава</h3>

        <ul>
            <li>Кава купаж</li>
            <li>Кава Арабіка +5 ₴</li>
            <li>Кава Декаф +10 ₴</li>
        </ul>

        <h3>Молоко 250 мл</h3>

        <ul>
            <li>Звичайне</li>
            <li>Кокосове +15 ₴</li>
            <li>Бананове +15 ₴</li>
            <li>Безлактозне +10 ₴</li>
            <li>Мигдалеве +15 ₴</li>
        </ul>

        <h3>Додатки</h3>

        <ul>
            <li>Еспресо купаж +10 ₴</li>
            <li>Еспресо арабіка +15 ₴</li>
            <li>Сироп</li>
        </ul>
    `,


    americano: `
        <h2>Американо</h2>

        <p class="price">42 ₴</p>

        <h3>Кава</h3>

        <ul>
            <li>Кава купаж</li>
            <li>Кава Арабіка +5 ₴</li>
            <li>Кава Декаф +10 ₴</li>
        </ul>

        <h3>Додатки</h3>

        <ul>
            <li>Еспресо купаж +10 ₴</li>
            <li>Еспресо арабіка +15 ₴</li>
            <li>Сироп</li>
        </ul>
    `,


    raf: `
        <h2>Раф</h2>

        <p class="price">82 ₴</p>

        <h3>Кава</h3>

        <ul>
            <li>Кава купаж</li>
            <li>Кава Арабіка +5 ₴</li>
            <li>Кава Декаф +10 ₴</li>
        </ul>
    `,


    dopio: `
        <h2>Допіо</h2>

        <p class="price">48 ₴</p>

        <h3>Кава</h3>

        <ul>
            <li>Кава купаж</li>
            <li>Кава Арабіка +5 ₴</li>
            <li>Кава Декаф +10 ₴</li>
        </ul>
    `,


    cheesecake: `
        <h2>Чізкейк</h2>

        <h3>Різновиди</h3>

        <ul>
            <li>Снікерс — 165 ₴</li>
            <li>Малиновий — 165 ₴</li>
        </ul>
    `,


    tiramisu: `
        <h2>Тірамісу</h2>

        <p class="price">130 ₴</p>

        <h3>Склад</h3>

        <ul>
            <li>Маскарпоне</li>
            <li>Кава</li>
            <li>Какао</li>
            <li>Ніжний бісквіт</li>
        </ul>
    `,


    croissant: `
        <h2>Круасан солоний</h2>

        <h3>Різновиди</h3>

        <ul>
            <li>Круасан з куркою — 160 ₴</li>
            <li>Круасан з лососем — 175 ₴</li>
            <li>Круасан з шинкою — 160 ₴</li>
        </ul>
    `,
    "waffle-rochetto": `
    <h2>Вафля Рошетто</h2>
    <p class="price">30 ₴</p>
`,

"millennium-chocolate": `
    <h2>Шоколадка Мілленіум</h2>

    <p class="price">40 ₴</p>
`,

"axa-muesli-bar": `
    <h2>Батончик-мюслі «АХА»</h2>

    <p class="price">28 ₴</p>
`,

"line-bar": `
    <h2>Батончик Лайн</h2>

    <p class="price">35 ₴</p>
`,

"fitness-bar": `
    <h2>Батончик «Фітнес»</h2>

    <p class="price">36 ₴</p>
`,

"food-mission-bar": `
    <h2>Натуральний батончик «Food Mission»</h2>

    <p class="price">65 ₴</p>
`,

"gingerbread": `
    <h2>Імбирне печиво</h2>

    <h3>Розмір</h3>

    <ul>
        <li>Велике — 68 ₴</li>
        <li>Маленьке — 50 ₴</li>
    </ul>
`,
cocoa: `
    <h2>Какао</h2>

    <h3>Розмір</h3>

    <ul>
        <li>250 мл — 55 ₴</li>
        <li>400 мл — 60 ₴</li>
        <li>500 мл — 75 ₴</li>
    </ul>

    <h3>Молоко 400 мл</h3>

    <ul>
        <li>Звичайне</li>
        <li>Кокосове +20 ₴</li>
        <li>Безлактозне +15 ₴</li>
        <li>Бананове +20 ₴</li>
        <li>Мигдалеве +20 ₴</li>
    </ul>

    <h3>Какао 400 мл</h3>

    <ul>
        <li>Солодке</li>
        <li>Натуральне +5 ₴</li>
    </ul>

    <h3>Додатки</h3>

    <ul>
        <li>Вершки +10 ₴</li>
        <li>Маршмелоу</li>
    </ul>
`,


matcha: `
    <h2>Матча лате</h2>

    <h3>Розмір</h3>

    <ul>
        <li>250 мл — 50 ₴</li>
        <li>400 мл — 55 ₴</li>
    </ul>

    <h3>Матча</h3>
    <ul>
    <li>Зелена</li>
    <li>Синя +5 ₴ </li>

    </ul>

    <h3>Молоко</h3>
    <ul>
        <li>Звичайне</li>
        <li>Кокосове +15 ₴</li>
        <li>Бананове +15 ₴</li>
        <li>Безлактозне +10 ₴</li>
        <li>Мигдалеве +15 ₴</li>
    </ul>
`,


hotchocolate: `
    <h2>Гарячий шоколад</h2>

    <h3>Розмір</h3>

    <ul>
        <li>250 мл — 50 ₴</li>
        <li>400 мл — 55 ₴</li>
    </ul>

    <h3>Молоко 250 мл</h3>

    <ul>
        <li>Звичайне</li>
        <li>Кокосове +15 ₴</li>
        <li>Бананове +15 ₴</li>
        <li>Безлактозне +10 ₴</li>
        <li>Мигдалеве +15 ₴</li>
    </ul>
`,


tea: `
    <h2>Чай</h2>

    <h3>Розмір</h3>

    <ul>
        <li>400 мл — 55 ₴</li>
        <li>500 мл — 60 ₴</li>
    </ul>

    <h3>Чай 400 мл</h3>

    <ul>
        <li>Чай пакетований</li>
        <li>Соус-пюре +20 ₴</li>
    </ul>

    <h3>Додатки</h3>

    <ul>
        <li>Апельсин</li>
        <li>Лимон</li>
    </ul>
`,

    mojito: `
        <h2>Мохіто</h2>

        <p class="price">80 ₴</p>

        <h3>Склад</h3>

        <ul>
            <li>Лайм</li>
            <li>М'ята</li>
            <li>Холодний напій</li>
        </ul>
    `,


    sunrise: `
        <h2>Санрайз</h2>

        <p class="price">80 ₴</p>

        <h3>Напій</h3>

        <ul>
            <li>Холодний напій</li>
        </ul>
    `,


    pinacolada: `
        <h2>Піна Колада</h2>

        <p class="price">80 ₴</p>

        <h3>Напій</h3>

        <ul>
            <li>Холодний напій</li>
        </ul>
    `,


    malibu: `
        <h2>Малібу</h2>

        <p class="price">80 ₴</p>

        <h3>Напій</h3>

        <ul>
            <li>Холодний напій</li>
        </ul>
    `

};



// =====================================
// КАТЕГОРІЇ
// =====================================

var categories = {

    coffee: {

        title: "Кава",

        icon: "☕",

        description:
            "Ароматна кава, приготована з любов'ю.",

        products: [

            {
                id: "espresso",
                name: "Еспресо",
                image: "images/espreso.jpeg",
                description:
                    "Насичений ароматний еспресо з виразним смаком.",
                price: "40 грн",
                popular: "Класика"
            },

            {
                id: "cappuccino",
                name: "Капучино 250/400/500",
                image: "images/capuchino.jpeg",
                description:
                    "Еспресо з ніжною молочною пінкою.",
                price: "62/68/84 грн"
            },

            {
                id: "flatwhite",
                name: "Флет Вайт",
                image: "images/flat.jpg",
                description:
                    "Подвійний еспресо з ніжним молоком.",
                price: "78 грн"
            },

            {
                id: "latte",
                name: "Латте 250/400/500",
                image: "images/latte.jpeg",
                description:
                    "Ніжна кава з великою кількістю молока.",
                price: "62/68/74 грн"
            },

            {
                id: "americano",
                name: "Американо",
                image: "images/amerecano.jpeg",
                description:
                    "Класична чорна кава з насиченим ароматом.",
                price: "42 грн"
            },

            {
                id: "raf",
                name: "Раф",
                image: "images/raf.png",
                description:
                    "Ніжний вершковий кавовий напій.",
                price: "82 грн"
            },

            {
                id: "dopio",
                name: "Допіо",
                image: "images/dopio.jpg",
                description:
                    "Подвійна порція насиченого еспресо.",
                price: "48 грн"
            }

        ]

    },


noncoffee: {

    title: "Не кава",

    icon: "🥛",

    description:
        "Гарячі напої без кави.",

    products: [

        {
            id: "cocoa",
            name: "Какао 250/400/500",
            image: "images/cocoa.jpg",
            description:
                "Ніжне какао на молоці з можливістю вибору молока та додатків.",
            price: "55/60/75 грн"
        },

        {
            id: "matcha",
            name: "Матча лате 250/400",
            image: "images/matcha.jpeg",
            description:
                "Ніжний матча лате з молоком.",
            price: "50/55 грн"
        },

        {
            id: "hotchocolate",
            name: "Гарячий шоколад 250/400",
            image: "images/hot-chocolate.webp",
            description:
                "Гарячий шоколад з ніжним молоком.",
            price: "50/55 грн"
        },

        {
            id: "tea",
            name: "Чай 400/500",
            image: "images/tea.jpeg",
            description:
                "Гарячий чай з можливістю додати цитрусові та соус-пюре.",
            price: "55/60 грн"
        }

    ]

},


    cold: {

        title: "Холодні напої",

        icon: "🥶",

        description:
            "Освіжаючі напої для спекотного дня.",

        products: [

            {
                id: "mojito",
                name: "Мохіто",
                image: "images/mojito.webp",
                description:
                    "Холодний напій з лаймом та м'ятою.",
                price: "80 грн"
            },

            {
                id: "sunrise",
                name: "Санрайз",
                image: "images/sunrise.webp",
                description:
                    "Холодний напій.",
                price: "80 грн"
            },

            {
                id: "pinacolada",
                name: "Піна Колада",
                image: "images/pinacolada.jpeg",
                description:
                    "Холодний напій.",
                price: "80 грн"
            },

            {
                id: "malibu",
                name: "Малібу",
                image: "images/malibu.jpg",
                description:
                    "Холодний напій.",
                price: "80 грн"
            }

        ]

    },


    seasonal: {

        title: "Сезонні гарячі напої",

        icon: "🍵",

        description:
            "Сезонні гарячі напої.",

        products: []

    },


bubble: {
    title: "Bubble напої",
    products: [
        {
            id: "bubble-latte",
            name: "Бабл Лате",
            image: "images/bubble.jpg",
            description: "Кава та молоко з бабл-додатками.",
            price: "98 ₴"
        },
        {
            id: "bubble-strawberry-coconut",
            name: "Бабл полуниця / кокос",
            image: "images/bubble-strawberry-coconut.webp",
            description: "Полуничний та кокосовий смак з молоком.",
            price: "98 ₴"
        },
        {
            id: "bubble-cocoa",
            name: "Бабл Какао",
            image: "images/bubble-cocoa.jpeg",
            description: "Какао з молоком та бабл-додатками.",
            price: "98 ₴"
        }
    ]
},


    coldcoffee: {

        title: "Холодні кавові напої",

        icon: "🧊",

        description:
            "Холодні напої на основі кави.",

        products: []

    },


    desserts: {

        title: "Десерти",

        icon: "🍰",

        description:
            "Щось смачне до твоєї улюбленої кави.",

        products: [

            {
                id: "cheesecake",
                name: "Чізкейк",
                image: "images/chescake.jpeg",
                description:
                    "Ніжний вершковий десерт з легкою текстурою.",
                price: "165 грн"
            },

            {
                id: "tiramisu",
                name: "Тірамісу",
                image: "images/tiramisu.jpeg",
                description:
                    "Класичний італійський десерт з маскарпоне.",
                price: "130 грн"
            }

        ]

    },


    salty: {

        title: "Солоне",

        icon: "🥐",

        description:
            "Солоні позиції до кави.",

        products: [

            {
                id: "croissant",
                name: "Круасан солоний",
                image: "images/cruasan.jpg",
                description:
                    "Хрусткий французький круасан.",
                price: "від 160 грн"
            }

        ]

    },


snacks: {
    title: "Снеки і батончики",
    icon: "🍫",
    description: "Снеки та батончики.",
    products: [
        {
            id: "waffle-rochetto",
            name: "Вафля Рошетто",
            image: "images/waffle-rochetto.jpeg",
            price: "30 ₴"
        },
        {
            id: "millennium-chocolate",
            name: "Шоколадка Мілленіум",
            image: "images/millennium-chocolate.webp",
            price: "40 ₴"
        },
        {
            id: "axa-muesli-bar",
            name: "Батончик-мюслі «АХА»",
            image: "images/axa-muesli-bar.webp",
            price: "28 ₴"
        },
        {
            id: "line-bar",
            name: "Батончик Лайн",
            image: "images/line-bar.jpg",
            price: "35 ₴"
        },
        {
            id: "fitness-bar",
            name: "Батончик «Фітнес»",
            image: "images/fitnes-bar.webp",
            price: "36 ₴"
        },
        {
            id: "food-mission-bar",
            name: "Натуральний батончик «Food Mission»",
            image: "images/food-mission-bar.webp",
            price: "65 ₴"
        },
        {
            id: "gingerbread",
            name: "Імбирне печиво",
            image: "images/gingerbread.jpg",
            price: "50/68 ₴"
        }
    ]
}

};



// =====================================
// ВІДКРИТТЯ КАТЕГОРІЇ
// =====================================

function openCategory(categoryName) {

    var category = categories[categoryName];

    if (!category) {
        return;
    }


    $("#category-page-title")
        .text(category.title);


    $("#category-page-icon")
        .text(category.icon);


    $("#category-page-description")
        .text(category.description);


    var container =
        $("#category-products");


    container.empty();


    if (
        !category.products ||
        category.products.length === 0
    ) {

        container.html(`

            <div class="empty-category">

                <div class="empty-category-icon">
                    ${category.icon}
                </div>

                <h3>
                    У цій категорії поки немає позицій
                </h3>

                <p>
                    Ми скоро додамо щось новеньке.
                </p>

            </div>

        `);

    } else {

        category.products.forEach(function(product) {

            var popular = "";

            if (product.popular) {

                popular = `
                    <span class="popular">
                        ${product.popular}
                    </span>
                `;

            }


            var card = `

                <div
                    class="menu-card"
                    onclick="openProduct('${product.id}')"
                >

                    <div class="card-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                        >

                        ${popular}

                    </div>


                    <div class="card-info">

                        <h3>
                            ${product.name}
                        </h3>


                       <p>
                            ${product.description || ""}
                        </p>


                        <div class="card-footer">

                            <strong>
                                ${product.price}
                            </strong>


                            <span class="more">
                                Детальніше →
                            </span>

                        </div>

                    </div>

                </div>

            `;


            container.append(card);

        });

    }


    $("#menu")
        .hide();


    $("#category-page")
        .css("display", "block");


    $("html, body")
        .animate(
            {
                scrollTop:
                    $("#category-page").offset().top - 80
            },
            400
        );


    setTimeout(function() {

        showCards();

    }, 100);

}



// =====================================
// ЗАКРИТТЯ КАТЕГОРІЇ
// =====================================

function closeCategory() {

    $("#category-page")
        .hide();


    $("#menu")
        .fadeIn(300);


    $("html, body")
        .animate(
            {
                scrollTop:
                    $("#menu").offset().top - 80
            },
            400
        );

}



// =====================================
// ВІДКРИТТЯ ТОВАРУ
// =====================================

function openProduct(product) {

    if (!products[product]) {
        return;
    }


    $("#product-content")
        .html(products[product]);


    $("#product-modal")
        .css("display", "flex");


    $("body")
        .css("overflow", "hidden");

}



// =====================================
// ЗАКРИТТЯ ТОВАРУ
// =====================================

function closeProduct() {

    $("#product-modal")
        .fadeOut(200);


    $("body")
        .css("overflow", "auto");

}



// =====================================
// КЛІК ПО ТЕМНОМУ ФОНУ
// =====================================

$("#product-modal").click(function(e) {

    if (e.target === this) {

        closeProduct();

    }

});



// =====================================
// ESC
// =====================================

$(document).keydown(function(e) {

    if (e.key === "Escape") {

        closeProduct();

    }

});



// =====================================
// ТІНЬ NAVBAR
// =====================================

$(window).scroll(function() {

    if ($(window).scrollTop() > 50) {

        $(".navbar").css(
            "box-shadow",
            "0 8px 25px rgba(0,0,0,.15)"
        );

    } else {

        $(".navbar").css(
            "box-shadow",
            "0 3px 20px rgba(0,0,0,.08)"
        );

    }

});



// =====================================
// АНІМАЦІЯ КАРТОК
// =====================================

function showCards() {

    $(".menu-card").each(function(index) {

        var card = $(this);

        var cardTop =
            card.offset().top;

        var windowBottom =
            $(window).scrollTop() +
            $(window).height();


        if (
            cardTop <
            windowBottom - 50
        ) {

            setTimeout(function() {

                card.addClass("show");

            }, index * 100);

        }

    });

}



// =====================================
// ЗАПУСК
// =====================================

$(window).on(
    "scroll",
    showCards
);


$(document).ready(function() {

    showCards();

});