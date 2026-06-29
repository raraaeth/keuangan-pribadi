/* ==========================================================
   Finance Dashboard
   File : js/utils.js
   Description : Utility Functions
   ========================================================== */

/* ==========================================
   DOM SELECTOR
========================================== */

const $ = selector =>
document.querySelector(selector);

const $$ = selector =>
Array.from(
document.querySelectorAll(selector)
);

/* ==========================================
   SET CONTENT
========================================== */

function setText(selector,value){

    const element=$(selector);

    if(!element) return;

    element.textContent=value;

}

function setHTML(selector,value){

    const element=$(selector);

    if(!element) return;

    element.innerHTML=value;

}

/* ==========================================
   SHOW / HIDE
========================================== */

function show(selector){

    const element=$(selector);

    if(!element) return;

    element.classList.remove("hidden");

}

function hide(selector){

    const element=$(selector);

    if(!element) return;

    element.classList.add("hidden");

}

/* ==========================================
   NUMBER
========================================== */

function toNumber(value){

    if(
        value===null ||
        value===undefined
    ){

        return 0;

    }

    return Number(

        String(value)

        .replaceAll(".","")

        .replaceAll(",","")

        .replace(/[^\d-]/g,"")

    ) || 0;

}

/* ==========================================
   CURRENCY
========================================== */

function formatCurrency(value){

    return new Intl.NumberFormat(

        "id-ID",

        {

            style:"currency",

            currency:"IDR",

            maximumFractionDigits:0

        }

    ).format(

        toNumber(value)

    );

}

/* ==========================================
   NUMBER FORMAT
========================================== */

function formatNumber(value){

    return new Intl.NumberFormat(

        "id-ID"

    ).format(

        toNumber(value)

    );

}

/* ==========================================
   PERCENT
========================================== */

function formatPercent(value){

    return `${

        Number(value).toFixed(1)

    }%`;

}

/* ==========================================
   DATE
========================================== */

function formatDate(date){

    if(!date) return "-";

    const d=new Date(date);

    return d.toLocaleDateString(

        "id-ID",

        {

            day:"2-digit",

            month:"long",

            year:"numeric"

        }

    );

}

/* ==========================================
   SHORT DATE
========================================== */

function shortDate(date){

    if(!date) return "-";

    return new Date(date)

    .toLocaleDateString(

        "id-ID",

        {

            day:"2-digit",

            month:"short"

        }

    );

}

/* ==========================================
   MONTH NAME
========================================== */

function monthName(month){

    const months=[

        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"

    ];

    return months[month-1];

}

/* ==========================================
   CURRENT MONTH
========================================== */

function getCurrentMonth(){

    const today=new Date();

    return `${

        today.getFullYear()

    }-${
        String(
            today.getMonth()+1
        ).padStart(2,"0")
    }`;

}

/* ==========================================
   CURRENT DATE
========================================== */

function today(){

    return new Date()

    .toISOString()

    .slice(0,10);

}

/* ==========================================
   RANDOM
========================================== */

function random(min,max){

    return Math.floor(

        Math.random()

        *(max-min+1)

    )+min;

}
