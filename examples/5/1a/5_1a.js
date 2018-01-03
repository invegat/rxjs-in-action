/**
 *  RxJS in Action
 *  Listing 5.1.1
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

const source1$ = Rx.Observable.interval(1000)
   .map(x => `Source 1 ${x}`)
   .take(3);
const source2$ = Rx.Observable.interval(1000)
   .map(y => `Source 2 ${y}`)
   .take(3);

Rx.Observable.merge(source1$, source2$)
   .subscribe(console.log);
   