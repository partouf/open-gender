
// script requires open-gender-common.js

var opengender = {
    titles_short: [opengender_common.empty, "Dhr.", opengender_common.empty, "Mevr.", opengender_common.empty, "Geen", opengender_common.empty],
    titles_long: [opengender_common.empty, "heer", opengender_common.empty, "mevrouw", opengender_common.empty, "Geen", opengender_common.empty],

    titles_salutation_example: function(titleid, lastname, initials) {
        var example = "";

        var namewithinitials = initials + " " + lastname;
        var namewithoutinitials = lastname;

        if (titleid == opengender_common.title.mixed) {
            example = "Geachte " + namewithinitials + ",";
        } else if (this.titles_long[titleid] != opengender_common.empty) {
            example = "Geachte " + this.titles_long[titleid] + " " + namewithoutinitials + ",";
        } else {
            example = "Geachte heer of mevrouw " + namewithoutinitials + ",";
        }

        return example;
    },

    titles_address_example: function(titleid, lastname, initials) {
        var example = "";

        var namewithinitials = initials + " " + lastname;

        if (titleid == opengender_common.title.mixed) {
            example = namewithinitials;
        } else if (this.titles_long[titleid] != empty) {
            example = this.titles_short[titleid] + " " + namewithinitials;
        } else {
            example = namewithinitials;
        }

        return example;
    }
};
