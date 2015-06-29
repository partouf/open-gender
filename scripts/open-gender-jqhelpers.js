
// requires jquery

// requires open-gender-common.js
// requires open-gender-<language>.js

var opengender_jqhelpers = {
    /**
     * Appends short titles as option elements to the given jquery encapsulated select element
     * @param jqueryelement $selectelement
     */
    addShortTitlesSelect: function($selectelement) {
        for (var k in opengender.titles_short) {
            var title = opengender.titles_short[k];
            if (title != opengender_common.empty) {
                $selectelement.append('<option value="' + k + '">' + title + '</option>');
            }
        }
    },
    /**
     * Appends long titles as option elements to the given jquery encapsulated select element
     * @param jqueryelement $selectelement
     */
    addLongTitlesSelect: function($selectelement) {
        for (var k in opengender.titles_long) {
            var title = opengender.titles_long[k];
            if (title != opengender_common.empty) {
                $selectelement.append('<option value="' + k + '">' + title + '</option>');
            }
        }
    },
    /**
     * Appends short titles as radiobuttons with a given name to the given parent element
     * @param jqueryelement $parentelement
     * @param string radioname
     */
    addShortTitlesRadio: function($parentelement, radioname) {
        for (var k in opengender.titles_short) {
            var title = opengender.titles_short[k];
            if (title != opengender_common.empty) {
                $parentelement.append('<input name="' + radioname + '" type="radio" value="' + k + '">' + title + '</input>');
            }
        }
    },
};

var opengender_titleinput = function($element) {
    return {
        inputelement: $element,
        spanelement: null,
        selectelement: null,
        radioelements: null,
        isNumeric: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        replaceBySelect: function() {
            var $obj = this;

            this.inputelement.attr("type", "hidden");

            var html = '<span><select class="gender-titles-short"></select></span>';

            this.spanelement = $(html);
            this.inputelement.after(this.spanelement);
            this.selectelement = this.spanelement.find(".gender-titles-short");

            opengender_jqhelpers.addShortTitlesSelect(this.selectelement);
            if ($obj.inputelement.val()) {
                this.selectelement.val($obj.inputelement.val());
            }
            $obj.inputelement.val(this.selectelement.val());

            this.selectelement.change(function() {
                $obj.inputelement.val($(this).val());
            });
        },
        replaceByRadio: function() {
            var $obj = this;

            this.inputelement.attr("type", "hidden");

            var html = '<span class="gender-titles-radio"></span>';

            this.spanelement = $(html);
            this.inputelement.after(this.spanelement);

            // add radio buttons to the span with a given name
            var radioname = "gendertitlesradio";
            opengender_jqhelpers.addShortTitlesRadio(this.spanelement, radioname);
            this.radioelements = this.spanelement.find("input[name="+radioname+"]");

            // select the radiobutton with the corresponding value that was preset in the input element
            if ($obj.inputelement.val() && this.isNumeric($obj.inputelement.val())) {
                this.radioelements.filter("input[value=" + $obj.inputelement.val() + "]").attr("checked", "");
            }

            // onchange of the radioelements, set the input element's value to the checked radiobutton's value
            this.radioelements.change(function() {
                $obj.inputelement.val($obj.radioelements.filter("input:checked").val());
            });
        }
    }
};
