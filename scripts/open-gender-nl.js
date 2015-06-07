
var empty = "";

var opengender = {
    titles_short: [empty, "Dhr.", empty, empty, "Mevr.", "Geen", empty],
    titles_long: [empty, "heer", empty, empty, "mevrouw", "Geen", empty],

    titles_salutation_example: function(titleid, lastname, initials) {
        var example = "";

        var namewithinitials = initials + " " + lastname;
        var namewithoutinitials = lastname;

        if (titleid == opengender_title.mixed) {
            example = "Geachte " + namewithinitials + ",";
        } else if (this.titles_long[titleid] != empty) {
            example = "Geachte " + this.titles_long[titleid] + " " + namewithoutinitials + ",";
        } else {
            example = "Geachte heer of mevrouw " + namewithoutinitials + ",";
        }

        return example;
    },

    titles_address_example: function(titleid, lastname, initials) {
        var example = "";

        var namewithinitials = initials + " " + lastname;

        if (titleid == opengender_title.mixed) {
            example = namewithinitials;
        } else if (this.titles_long[titleid] != empty) {
            example = this.titles_short[titleid] + " " + namewithinitials;
        } else {
            example = namewithinitials;
        }

        return example;
    }
};
