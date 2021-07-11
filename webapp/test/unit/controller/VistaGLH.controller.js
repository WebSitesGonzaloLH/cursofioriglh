/*global QUnit*/

sap.ui.define([
	"GLH/cursofioriglh/controller/VistaGLH.controller"
], function (Controller) {
	"use strict";

	QUnit.module("VistaGLH Controller");

	QUnit.test("I should test the VistaGLH controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
