// https://github.com/robinloeffel/sgnls
const tick = ( cb ) => globalThis.queueMicrotask( cb );

const signal = ( initialValue ) => {
  let running = false;
  let saved = initialValue;
  let effects = [];

  const invokeEffects = () => {
    if ( effects.length > 0 && !running ) {
      running = true;
      tick( () => {
        for ( const effect of effects ) effect( saved );

        running = false;
      } )
    }
  }

  return {
    get: () => saved,
    set: ( val ) => {
      if ( val !== saved ) {
        saved = val;
        invokeEffects();
      }
    },
    update: updater => {
      if ( updater( saved ) !== saved ) {
        saved = updater( saved );
        invokeEffects();
      };
    },
    effect: ( effectToAdd ) => effects.push( effectToAdd ),
    stop: () => tick( () => ( effects = [] ) )
  };
};

export default signal;