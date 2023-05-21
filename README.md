---  Search  ---

Debouncing:

  if i am typing fast, it means time difference between each key stroke is around 30ms, and according to user perpective, it doesnot require recommendation. so no. api call will less.

  if i am typing slow, it means time difference between each key stroke is around 200ms, and according to user perpective, it requires recommendation. so no. api call will high.

  performance:
   - iphone pro max = 14 letter * for 1000 people = 14000  api call
   - with debouncing = 3 api calls * for 1000 people = 3000 api call

 to give better user experience, website shows recommendation

 debouncing with 200ms: if time difference between two key stroke is < 200ms - decline api call
                        if time difference between two key stroke is > 200ms - make api call

