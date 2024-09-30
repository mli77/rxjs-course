import { Observable } from "rxjs";

export function createHttpObservable(url:string) {
    return Observable.create(observer => {
      const controller = new AbortController();
      const signal = controller.signal;

      fetch(url, {signal}).then(
        response => {
          console.log(response.status);
          return response.json();
        }
      ).then(
        body => {
          observer.next(body);
          observer.complete();
        }
      ).catch(err => {
        console.error(err);
        observer.error(err);
      })

      return () => controller.abort();
    });

  }

