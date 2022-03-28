import { currencies } from "./currency.js";
import { generateOptions} from "./handler.js";
import { show } from "./money.js";
const from = document.querySelector("[name = from-country]");
const to = document.querySelector("[name = to-country]");
const input = document.querySelector(".given-currency");
const country = generateOptions(currencies);
from.innerHTML = country;
to.innerHTML = country;
document.getElementById('amt').addEventListener('change',show)
