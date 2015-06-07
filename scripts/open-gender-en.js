
var empty = "";

var opengender = {
    titles_short: [empty, "Mr.", empty, "Miss", "Mrs.", "Mx.", empty],
    titles_long: [empty, "mister", empty, "miss", "misses", "mixed", empty],

    titles_salutation_example: function(titleid, lastname, initials) {
        var example = "";

        var namewithinitials = initials + " " + lastname;
        var namewithoutinitials = lastname;

        if (titleid == opengender_title.mixed) {
            example = "Dear " + this.titles_short[titleid] + " " + namewithinitials + ",";
        } else if (this.titles_short[titleid] != empty) {
            example = "Dear " + this.titles_short[titleid] + " " + namewithoutinitials + ",";
        } else {
            example = "Dear Sir / Madam,";
        }

        return example;
    },

    titles_address_example: function(titleid, lastname, initials) {
        var example = "";

        var namewithinitials = initials + " " + lastname;

        if (this.titles_long[titleid] != empty) {
            example = this.titles_short[titleid] + " " + namewithinitials;
        } else {
            example = namewithinitials;
        }

        return example;
    }
};
