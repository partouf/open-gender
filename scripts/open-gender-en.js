
// script requires open-gender-common.js

var opengender = {
    titles_short: [opengender_common.empty, "Mr.", opengender_common.empty, "Miss", "Mrs.", "Mx.", opengender_common.empty],
    titles_long: [opengender_common.empty, "mister", opengender_common.empty, "miss", "misses", "mixed", opengender_common.empty],

    titles_salutation_example: function(titleid, lastname, initials) {
        var example = "";

        var namewithinitials = initials + " " + lastname;
        var namewithoutinitials = lastname;

        if (titleid == opengender_common.title.mixed) {
            example = "Dear " + this.titles_short[titleid] + " " + namewithinitials + ",";
        } else if (this.titles_short[titleid] != opengender_common.empty) {
            example = "Dear " + this.titles_short[titleid] + " " + namewithoutinitials + ",";
        } else {
            example = "Dear Sir / Madam,";
        }

        return example;
    },

    titles_address_example: function(titleid, lastname, initials) {
        var example = "";

        var namewithinitials = initials + " " + lastname;

        if (this.titles_long[titleid] != opengender_common.empty) {
            example = this.titles_short[titleid] + " " + namewithinitials;
        } else {
            example = namewithinitials;
        }

        return example;
    }
};
