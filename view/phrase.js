
module.exports = function( vs ){

  // validate required params
  if( !vs.isset('input:name') ||
      !vs.isset('phrase:analyzer') ||
      !vs.isset('phrase:field') ||
      !vs.isset('phrase:boost') ||
      !vs.isset('phrase:slop') ){
    return null;
  }

  // base view
  var view = { 'match_phrase': {} };

  // match query
  view.match_phrase[ vs.var('phrase:field') ] = {
    analyzer: vs.var('phrase:analyzer'),
    boost: vs.var('phrase:boost'),
    slop: vs.var('phrase:slop'),
    query: vs.var('input:name')
  };

  if (vs.isset('phrase:fuzziness')) {
    view.match_phrase[ vs.var('phrase:field') ].fuzziness = vs.var('phrase:fuzziness');
  }

  // Not supported for match_phrase queries
  // if (vs.isset('phrase:cutoff_frequency')) {
  //   view.match_phrase[ vs.var('phrase:field') ].cutoff_frequency = vs.var('phrase:cutoff_frequency');
  // }

  return view;
};
