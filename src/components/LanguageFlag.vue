<script>

export default {
  name: 'LanguageFlag',
  props: {
    languageCode: String,
  },
  data() {
    return {
      // This object converts languages (ISO 639-1) into arguably appropriate flags (ISO 3166-1-alpha-2).
      languageToCountry: {
        "aa": "dj",
        "af": "za",
        "ak": "gh",
        "sq": "al",
        "am": "et",
        "ar": {
          "proposed_iso_3166": "aa",
          "flag": "https:\/\/en.wikipedia.org\/wiki\/Flag_of_the_Arab_League",
          "name": "Arab League"
        },
        "hy": "am",
        "ay": {
          "proposed_iso_3166": "wh",
          "flag": "https:\/\/en.wikipedia.org\/wiki\/Wiphala",
          "name": "Wiphala"
        },
        "az": "az",
        "bm": "ml",
        "be": "by",
        "bn": "bd",
        "bi": "vu",
        "bs": "ba",
        "bg": "bg",
        "my": "mm",
        "ca": "ad",
        "zh": "cn",
        "hr": "hr",
        "cs": "cz",
        "da": "dk",
        "dv": "mv",
        "nl": "nl",
        "dz": "bt",
        "en": "gb",
        "et": "ee",
        "ee": {
          "proposed_iso_3166": "ew",
          "flag": "https:\/\/en.wikipedia.org\/wiki\/Ewe_people#\/media\/File:Flag_of_the_Ewe_people.svg",
          "name": "Ewe"
        },
        "fj": "fj",
        "fil": "ph",
        "fi": "fi",
        "fr": "fr",
        "ff": {
          "proposed_iso_3166": "ff",
          "flag": "https:\/\/www.nationstates.net\/images\/flags\/uploads\/fulah__403173.png",
          "name": "Fulah"
        },
        "gaa": "gh",
        "ka": "ge",
        "de": "de",
        "el": "gr",
        "gn": {
          "proposed_iso_3166": "gx",
          "flag": "https:\/\/www.crwflags.com\/fotw\/flags\/xg.html",
          "name": "Guarani"
        },
        "gu": "in",
        "ht": "ht",
        "ha": {
          "proposed_iso_3166": "ha",
          "flag": "https:\/\/www.crwflags.com\/fotw\/flags\/ng%7Dhausa.html",
          "name": "Hausa"
        },
        "he": "il",
        "hi": "in",
        "ho": "pg",
        "hu": "hu",
        "is": "is",
        "ig": "ng",
        "id": "id",
        "ga": "ie",
        "it": "it",
        "ja": "jp",
        "kr": "ne",
        "kk": "kz",
        "km": "kh",
        "kmb": "ao",
        "rw": "rw",
        "kg": "cg",
        "ko": "kr",
        "kj": "ao",
        "ku": "iq",
        "ky": "kg",
        "lo": "la",
        "la": "va",
        "lv": "lv",
        "ln": "cg",
        "lt": "lt",
        "lu": "cd",
        "lb": "lu",
        "mk": "mk",
        "mg": "mg",
        "ms": "my",
        "mt": "mt",
        "mi": "nz",
        "mh": "mh",
        "mn": "mn",
        "mos": "bf",
        "ne": "np",
        "nd": "zw",
        "nso": "za",
        "no": "no",
        "nb": "no",
        "nn": "no",
        "ny": "mw",
        "pap": "aw",
        "ps": "af",
        "fa": "ir",
        "pl": "pl",
        "pt": "pt",
        "pa": "in",
        "qu": "wh",
        "ro": "ro",
        "rm": "ch",
        "rn": "bi",
        "ru": "ru",
        "sg": "cf",
        "sr": "rs",
        "srr": "sn",
        "sn": "zw",
        "si": "lk",
        "sk": "sk",
        "sl": "si",
        "so": "so",
        "snk": "sn",
        "nr": "za",
        "st": "ls",
        "es": "es",
        "sw": {
          "proposed_iso_3166": "sw",
          "flag": "https:\/\/commons.wikimedia.org\/wiki\/File:Flag_of_Swahili.gif",
          "name": "Swahili"
        },
        "ss": "sz",
        "sv": "se",
        "tl": "ph",
        "tg": "tj",
        "ta": "lk",
        "te": "in",
        "tet": "tl",
        "th": "th",
        "ti": "er",
        "tpi": "pg",
        "ts": "za",
        "tn": "bw",
        "tr": "tr",
        "tk": "tm",
        "uk": "ua",
        "umb": "ao",
        "ur": "pk",
        "uz": "uz",
        "ve": "za",
        "vi": "vn",
        "cy": "gb",
        "wo": "sn",
        "xh": "za",
        "yo": {
          "proposed_iso_3166": "yo",
          "flag": "https:\/\/www.crwflags.com\/fotw\/flags\/ng%7Dyorub.html",
          "name": "Yoruba"
        },
        "zu": "za"
      },
    };
  },
  computed: {
    // Returns the flag corresponding to a language based on the above object.
    country() {
      return this.languageToCountry[this.languageCode];
    },
    // Returns the value type of "country".
    isCountryString() {
      return typeof this.country === 'string';
    },
    // Returns the country code if the language corresponds to a flag/country rather than to an object (in certain unclear cases) or to undefined. Otherwise, returns the language code itself.
    flagCode() {
      return this.isCountryString ? this.country : this.languageCode;
    },
  },
};

</script>

<template>
  <span v-if="isCountryString" :class="`fi fi-${flagCode}`"></span>
  <span v-else>{{ languageCode }}</span>
</template>

<style lang="scss" scoped></style>