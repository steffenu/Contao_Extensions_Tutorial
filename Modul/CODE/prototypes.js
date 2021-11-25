/*  Obect that needs to be genearted for ADOBE



function Fontpicker() {
	Fontpicker.prototype = {
		KitObjects: function () {
			let salsarico = {
				kit: {
					id: "ewa3sph",
					name: "Salsarico",
					analytics: false,
					domains: ["f"],
					families: [
						{
							id: "bpdp",
							name: "Social Gothic",
							slug: "social-gothic",
							css_names: ["social-gothic"],
							css_stack: '"social-gothic",sans-serif',
							subset: "default",
							variations: ["n4", "n7"],
						},
						{
							id: "hbhv",
							name: "Social Gothic Soft",
							slug: "social-gothic-soft",
							css_names: ["social-gothic-soft"],
							css_stack: '"social-gothic-soft",sans-serif',
							subset: "default",
							variations: ["n7"],
						},
						{
							id: "mbhp",
							name: "FF Folk Rough",
							slug: "ff-folk-rough",
							css_names: ["ff-folk-rough"],
							css_stack: '"ff-folk-rough",sans-serif',
							subset: "default",
							variations: ["n4"],
						},
						{
							id: "qfxd",
							name: "Stud",
							slug: "stud",
							css_names: ["stud"],
							css_stack: '"stud",sans-serif',
							subset: "default",
							variations: ["n4"],
						},
						{
							id: "rnjs",
							name: "FF Folk",
							slug: "ff-folk",
							css_names: ["ff-folk"],
							css_stack: '"ff-folk",sans-serif',
							subset: "default",
							variations: ["n4"],
						},
						{
							id: "szwv",
							name: "Social Gothic Rough",
							slug: "social-gothic-rough",
							css_names: ["social-gothic-rough"],
							css_stack: '"social-gothic-rough",sans-serif',
							subset: "default",
							variations: ["n7"],
						},
						{
							id: "ttlj",
							name: "Battery Park",
							slug: "battery-park",
							css_names: ["battery-park"],
							css_stack: '"battery-park",sans-serif',
							subset: "default",
							variations: ["n4"],
						},
						{
							id: "xzwq",
							name: "Social Gothic Stencil",
							slug: "social-gothic-stencil",
							css_names: ["social-gothic-stencil"],
							css_stack: '"social-gothic-stencil",sans-serif',
							subset: "default",
							variations: ["n7"],
						},
					],
					optimize_performance: false,
				},
			};
			return salsarico;
		},
	};
}

/*
Erst seit Es6 gibt es Klassen in form von "Syntactic Sugar".
Davor musste man Sachen wie Vererbung über den "Protoyp" regeln.

Warum tun wir uns das an :D ? Alter Code existiert..

Nutze aber definitv Klassen.
So muss man nicht exra umdenken.

Genauso wie man heutzutage async await nutzt und nicht mehr "callback hell" :D.

*/

// FONTPICKER Instanz
let __Fontpicker = new Fontpicker();
console.log("Fontpicker:", __Fontpicker);

// Adding a function to the Fontpicker class prototype
Fontpicker.prototype.AddedFunction = function () {
	return "some Function ;)";
};
console.log(__Fontpicker, "Fontpicker Object");

// Executing the Function from the prototype
console.log(Fontpicker.prototype.AddedFunction(), "Executing AddedFunction");

// Über Den Prototype des constructurs unsere instanz  AddedFunction ausführen
console.log(__Fontpicker.constructor.prototype.AddedFunction(), "Executing ");

var prototype = Object.getPrototypeOf(__Fontpicker);

console.log(prototype, "proto");

function somefunction() {
	let somevalue = "123";
	let somevalue2 = "456";

	return somevalue;
}

console.log("somefunction:", somefunction.prototype);
