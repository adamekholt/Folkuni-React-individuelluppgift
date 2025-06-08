Jag har valt att använda de tre externa biblioteken Font Awesome, react-confetti och uuid. Alla tre valdes eftersom de bidrar till en bättre användarupplevelse och ger sidan ett mer visuellt tilltalande intryck.

Font Awesome använder jag för att visa ikoner som gör gränssnittet mer intuitivt. Till exempel visas en kundvagn uppe i högra hörnet när det finns något i den, det finns en papperskorg bredvid varje biljett i kundvagnen för att kunna ta bort den vid behov, samt en tillbaka pil som gör det enkelt att gå tillbaka till eventsidan. Det ger en mer visuell och användarvänlig upplevelse, och ikonerna hjälper användaren att snabbt förstå funktionerna.
React-confetti använder jag på bekräftelsesidan (ConfirmationPage.jsx) efter att ett köp har slutförts. När användaren kommer till bekräftelsesidan visas konfetti i några sekunder som ett litet "hurra" för att beställningen gick igenom. Jag har skapat en enkel custom hook (useConfetti) som styr hur länge konfettin ska visas. Det är ett litet men effektfullt tillägg som ger ett trevligt avslut på köpupplevelsen.

Uuid använder jag för att generera ett unikt orderID när användaren bekräftar sitt köp. Det gör att varje beställning får ett eget ID, vilket både är praktiskt och tydligt. 

