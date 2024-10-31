# Viso Test Assignment

[Backend](https://viso-ta.onrender.com)

[Docs](https://viso-ta.onrender.com/api)

[Google Sheet](https://docs.google.com/spreadsheets/d/1tdN9Y0D60KXsXrN3vBr7bBDHJoHttnlKbQr501BkCNA/edit?usp=sharing)

### Regarding the issues that i got in the feedback
1. No websocket connection - **Not Fixable** <br>
WebSocket connection is not supported for Apps Scrips, therefore it just can't be done

2. Instead of using Row type, you can use DTO class (WebhookDto) - **Fixed** <br>
There's a semantic issue appearing, I used Prisma generate class instead and removed redundancy

3. Prisma returns \*, therefore no need to use select when building a query - **Fixed** <br>
Agreed and removed 

3. No analytics - **TBD** <br>
I have no experience with something like this, so I wasn't able to do it 

4. Redundant logs in webhook.service.ts - **Fixed** <br>
Agreed and removed

5. Error handling (when writing into a database and hitting a unique constraint) - **Fixed** <br>
I wasn't aware that this solution might have crated performance overhead, so agreed and removed 