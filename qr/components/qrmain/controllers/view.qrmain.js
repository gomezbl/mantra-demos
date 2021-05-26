"use strict";

module.exports = {
    mainview: async (req,res) => {
        const Mantra = res.MantraAPI;

        Mantra.RenderView( "qrmain.mainview" );
    }
}
