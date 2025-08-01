/* -*- js-indent-level: 8; fill-column: 100 -*- */
/*
 * Copyright the Collabora Online contributors.
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/*
 * CanvasSectionProps
 *
 * It's really difficult to set drawing and processing orders of sections, since they are mostly defined on different files.
 * So we have this file, to manage their orders easily. Define them here, globally. Then you can use from everywhere.
 * Refer to CanvasSectionContainer.ts for definitions of processingOrder, drawingOrder and zIndex.
 */

/*
    z-index        : Higher zIndex will be drawn on top.
    Processing and drawing orders are meaningful between sections with the same zIndex.
    Processing order	: Important for locations and sizes of sections. Lowest processing order will be processed first.
    Drawing order	: Highest with the same zIndex will be drawn on top.
*/

/* global L */

L.CSections = {};
L.CSections.Debug = {}; // For keeping things simple.

// First definitions. Other properties will be written according to their orders.
L.CSections.CommentList =			{ name: 'comment list'		, zIndex: 5	};
L.CSections.Tiles = 				{ name: 'tiles'				, zIndex: 5 };
L.CSections.Overlays =				{ name: 'overlay'			, zIndex: 5 };
L.CSections.CalcGrid = 				{ name: 'calc grid'			, zIndex: 5 };
L.CSections.Debug.Splits = 			{ name: 'splits'			, zIndex: 5 };
L.CSections.Debug.TilePixelGrid = 	{ name: 'tile pixel grid'	, zIndex: 5 };
L.CSections.Debug.DebugOverlay = 	{ name: 'debug overlay'     , zIndex: 5 };
L.CSections.Debug.PreloadMap = 	    { name: 'preload map'	    , zIndex: 5 };
L.CSections.ColumnHeader = 			{ name: 'column header'		, zIndex: 5 };
L.CSections.RowHeader = 			{ name: 'row header'		, zIndex: 5 };
L.CSections.Splitter =              { name: 'splitter'			, zIndex: 5 };
L.CSections.CornerHeader = 			{ name: 'corner header'		, zIndex: 5 };
L.CSections.OtherViewCellCursor =   { zIndex: 5 };
L.CSections.ColumnGroup = 			{ name: 'column group'		, zIndex: 5 };
L.CSections.RowGroup = 				{ name: 'row group'			, zIndex: 5 };
L.CSections.CornerGroup = 			{ name: 'corner group'		, zIndex: 5 };

L.CSections.Comment =				{ name: 'comment'			, zIndex: 7	}; // This class is for comment markers. It is a document object. One should change instance's name after initializing (there may be many instances of this class).

L.CSections.AutoFillMarker = 		{ name: 'auto fill marker'	, zIndex: 5 };
L.CSections.CellCursor = 			{ name: 'OwnCellCursor'     , zIndex: 5 };
L.CSections.FocusCell =             { name: 'focus cell'		, zIndex: 5 };
L.CSections.DefaultForDocumentObjects = {                         zIndex: 9 };
L.CSections.HTMLObject     =        {                             zIndex: 9 };

L.CSections.ContentControl =        { name: 'content control'   , zIndex: 11 };
L.CSections.CalcValidityDropDown =  { name: 'calc validity dropdown', zIndex: 11 };

L.CSections.Scroll =				{ name: 'scroll'			, zIndex: 13 };

/*
    zIndex = 5. z-index of tiles.
    These are sections either:
        * Bound to tiles section.
        * At the same level with tiles section - so they share the available canvas space.
*/

L.CSections.CommentList.processingOrder = 			24; // Writer & Impress. Before tiles section, because tiles section will be expanded into the empty area.
L.CSections.CornerGroup.processingOrder =			25; // Calc.
L.CSections.RowGroup.processingOrder =				27; // Calc.
L.CSections.ColumnGroup.processingOrder =			29; // Calc.
L.CSections.CornerHeader.processingOrder =			30; // Calc.
L.CSections.RowHeader.processingOrder =				40; // Calc.
L.CSections.ColumnHeader.processingOrder =			50; // Calc.
L.CSections.Tiles.processingOrder = 				60; // Writer & Impress & Calc.
L.CSections.FocusCell.processingOrder =     		61; // Calc.
L.CSections.OtherViewCellCursor.processingOrder =   62; // Calc. Other views' cell cursors.
L.CSections.CellCursor.processingOrder =			63; // Calc.
L.CSections.AutoFillMarker.processingOrder =		64; // Calc.
L.CSections.Overlays.processingOrder =				65; // Writer & Impress & Calc. This is bound to tiles.
L.CSections.Debug.TilePixelGrid.processingOrder = 	66; // Writer & Impress & Calc. This is bound to tiles.
L.CSections.Debug.DebugOverlay.processingOrder = 	67; // Writer & Impress & Calc. This is bound to tiles.
L.CSections.Debug.PreloadMap.processingOrder =		68; // Writer & Impress & Calc. This is bound to tiles.
L.CSections.CalcGrid.processingOrder = 				69; // Calc. This is bound to tiles.
L.CSections.Debug.Splits.processingOrder = 			70; // Calc. This is bound to tiles.
L.CSections.Splitter.processingOrder = 			    80; // Calc.

L.CSections.CalcGrid.drawingOrder = 				40; // Calc.
L.CSections.Tiles.drawingOrder = 					50; // Writer & Impress & Calc.
L.CSections.CommentList.drawingOrder =				55; // Writer & Impress.
L.CSections.Debug.TilePixelGrid.drawingOrder = 		60; // Writer & Impress & Calc.
L.CSections.Debug.DebugOverlay.drawingOrder = 		60; // Writer & Impress & Calc.
L.CSections.Debug.PreloadMap.drawingOrder = 		60; // Writer & Impress & Calc.
L.CSections.Overlays.drawingOrder =					71; // Writer & Impress & Calc.
L.CSections.Debug.Splits.drawingOrder = 			90; // Calc.
L.CSections.FocusCell.drawingOrder =		    	91; // Calc.
L.CSections.OtherViewCellCursor.drawingOrder =      92; // Calc.
L.CSections.CellCursor.drawingOrder =				93; // Calc.
L.CSections.AutoFillMarker.drawingOrder =			94; // Calc.
L.CSections.RowGroup.drawingOrder =					100; // Calc.
L.CSections.ColumnGroup.drawingOrder =				110; // Calc.
L.CSections.CornerGroup.drawingOrder =				120; // Calc.
L.CSections.CornerHeader.drawingOrder =				130; // Calc.
L.CSections.RowHeader.drawingOrder = 				140; // Calc.
L.CSections.ColumnHeader.drawingOrder = 			150; // Calc.
L.CSections.Splitter.drawingOrder = 				160; // Calc.

/* zIndex = 6 and goes on. */

/* zIndex = 7 */
L.CSections.Comment.processingOrder =				1; // Since this is a document object, processing order is not very important. But it should be higher than tiles's processing order. Because tiles section is the document anchor.

L.CSections.Comment.drawingOrder =					1; // Writer & Imnpress & Calc.

/* zIndex = 9  */
L.CSections.HTMLObject.drawingOrder     =           55; // Calc.
L.CSections.HTMLObject.processingOrder     =        1; // Calc.
L.CSections.DefaultForDocumentObjects.processingOrder = 10;
L.CSections.DefaultForDocumentObjects.drawingOrder = 10;

/* zIndex = 11  */
L.CSections.ContentControl.processingOrder =		1; // Writer.

L.CSections.ContentControl.drawingOrder =			1; // Writer.

/* zIndex = 13 */
L.CSections.Scroll.processingOrder = 				1; // Writer & Impress & Calc.

L.CSections.Scroll.drawingOrder = 					1; // Writer & Impress & Calc.
