SQLite format 3   @    �              F                                                         �    ���                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	      �    �                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   l ���������wl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              	logs �
keys	#applicationiMacros/useragentprofiles � smtps!listemails
emailslistsmtpsBrowsers	   � ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      $?ziggo.nlmx.tb.mail.iss.as9143.net&Agmail.comgmail-smtp-in.l.google.com                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              G  GQ��%                                                   ��atableBrowsersBrowsersCREATE TABLE [Browsers] (
[id] INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
[name] VARCHAR(100)  NULL,
[installation] NVARCHAR(400)  NULL,
[profil] NVARCHAR(400)  NULL,
[default] NVARCHAR(400)  NULL,
[url] NVARCHAR(400)  NULL
)P++Ytablesqlite_sequencesqlite_sequenceCREATE TABLE sqlite_sequence(name,seq)a�-tableMXMXCREATE TABLE [MX] (
[domain] VARCHAR(100)  NULL,
[value] VARCHAR(200)  NULL
)��etablelistsmtpslistsmtpsCREATE TABLE [listsmtps] (
[id] INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL,
[name] NVARCHAR(300)  NULL
)�!!�gtablelistemailslistemailsCREATE TABLE [listemails] (
[id] INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
[name] NVARCHAR(300)  NULL
)�X�tableemailsemailsCREATE TABLE [emails] (
[id] INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL,
[email] NVARCHAR(300)  NULL,
[fname] NVARCHAR(300)  NULL,
[lname] NVARCHAR(300)  NULL,
[idlist] INTEGER  NULL
)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  CG                                                                                                                                                                                                                                                                         �)�1tablesmtpssmtps	CREATE TABLE [smtps] (
[id] INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL,
[server] NVARCHAR(300)  NULL,
[port] INTEGER  NULL,
[user] NVARCHAR(300)  NULL,
[password] NVARCHAR(300)  NULL,
[number] INTEGER  NULL,
[idlist] INTEGER  NULL,
[fromemail] VARCHAR(200)  NULL
)��UtableprofilesprofilesCREATE TABLE [profiles] (
[id] INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL,
[browser] NVARCHAR(100)  NULL,
[profile] NVARCHAR(100)  NULL,
[email] NVARCHAR(100)  NULL,
[proxy] NVARCHAR(200)  NULL,
[idagent] INTEGER  NULL
)�6	�;tableuseragentuseragentCREATE TABLE [useragent] (
[id] INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL,
[agent] NVARCHAR(500)  NULL
, name varchar(100), platform varchar(100))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 �    ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               �   S�����������������������                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     B-  <,  '+  *  )   �(   �%   �#   �    �   �   �   �   �   �   �   t   i   T   B	   ;   5   4   � ��j                                                                                                                                                                                                                                                                                                                                                                                            �8
�GtableiMacrosiMacrosCREATE TABLE "iMacros" (
[id] INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL,
[isp] VARCHAR(100)  NULL,
[name] VARCHAR(100)  NULL,
[method] VARCHAR(150)  NULL,
[macros] TEXT  NULL,
[etat] INTEGER DEFAULT '''1''' NULL,
[_order] INTEGER DEFAULT '''0''' NULL
, platform varchar(100))�"�tablesettingsettingCREATE TABLE [setting] (
[id] INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
[name] VARCHAR(100)  NULL,
[values] VARCHAR(500)  NULL
)�##�mtableapplicationapplicationCREATE TABLE [application] (
[id] INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
[version] VARCHAR(100)  NULL
)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 � �                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        !23.08.22.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 " "                                                                                                                                                                                                                                                                                      �k�9tablelogslogsCREATE TABLE [logs] ([id] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,[date_logs] TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,[isp] VARCHAR(100) NULL,[browser_profile] VARCHAR(200) NULL,[type_action] VARCHAR(200) NULL)�m�=tablekeyskeysCREATE TABLE [keys] (
[id] INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL,
[idpc] VARCHAR(200)  NULL,
[user] VARCHAR(100)  NULL,
[key] VARCHAR(500)  NULL,
[gmail] INTEGER DEFAULT '''0''' NULL,
[hotmail] INTEGER DEFAULT '''0''' NULL,
[yahoo] INTEGER DEFAULT '''0''' NULL,
[send] INTEGER DEFAULT '''0''' NULL,
[methodes] INTEGER DEFAULT '0' NULL,
[cleandata] INTEGER DEFAULT '0' NULL,
[newsletters] INTEGER DEFAULT '0' NULL,
[checkproxy] INTEGER DEFAULT '0' NULL
)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ��w* � � c    F 'q   firefox 32bitC:\Program Files (x86)\Mozilla Firefox\firefox.exe; )Y   waterfox 64bitC:\Program Files\Waterfox\waterfox.exeA )e   waterfox 32bitC:\Program Files (x86)\Waterfox\waterfox.exeE +k   icedragon 64bitC:\Program Files\Comodo\IceDragon\icedragon.exeK +w   icedragon 32bitC:\Program Files (x86)\Comodo\IceDragon\icedragon.exe; )Y   Cyberfox 64bitC:\Program Files\Cyberfox\Cyberfox.exe�&
 )g��?�palemoon 32bitC:\Program Files (x86)\Pale Moon\palemoon.exeC:\Users\lenovo\AppData\Roaming\Moonchild Productions\Pale Moon\C:\Users\lenovo\AppData\Roaming\Moonchild Productions\Pale Moon\Profiles\g7wafj1t.defaulthttps://rm-eu.palemoon.org/release/palemoon-29.4.0.2.win32.installer.exe� 
 )[��?�palemoon 64bitC:\Program Files\Pale Moon\palemoon.exeC:\Users\lenovo\AppData\Roaming\Moonchild Productions\Pale Moon\C:\Users\lenovo\AppData\Roaming\Moonchild Productions\Pale Moon\Profiles\g7wafj1t.defaulthttps://rm-eu.palemoon.org/release/palemoon-29.4.0.2.win64.installer.exe   � �                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    @	 'e   firefox 64bitC:\Program Files\Mozilla Firefox\firefox.exe    Y u	n� Y                                                                     �) �5Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1Safari 14.0 (IPHONE)mobile�8 �?3Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/113.0.0.0Edge 113.0 (IPHONE)mobile�+ �#5Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1Safari 13.0 (IPHONE)mobile� �Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.203Edg 115.0DESKTOPj �-'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0Firefox 116.0DESKTOP�
 �k%Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36Chrome 116.0DESKTOP    p B��  p                                                                                              �- �=Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36Chrome 63.0 (GALAXY S9+)mobile�, �YMozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36Chrome 80.0 (SAMSUNG GALAXY S20 ULTRA)mobile�8 �SMozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36Chrome 87.0 (SAMSUNG GALAXY A51/71)mobile�5 �MMozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36Chrome 87.0 (SAMSUNG GALAXY S8+)mobile�; �7AMozilla/5.0 (Linux; Android 9.0; SAMSUNG SM-F900U Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36Chrome 113.0 (GALAXY FOLD)mobile    & Gk� � &                    �Q �QSMozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 550) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263Edge 14.14263 (MICROSOFT LUMIA 550)mobile�Q �QSMozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263Edge 14.14263 (MICROSOFT LUMIA 950)mobile� �}9Mozilla/5.0 (Linux; Android) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.109 Safari/537.36 CrKey/1.54.248666Chrome 88.0 (NEST HUB)mobile�Y �;yMozilla/5.0 (Linux; Android 11; SAMSUNG SM-G973U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36 Chrome 87.0 (SamsungBrowser GALAXY NOTE 20 ANDROID 11)mobile�6 �OMozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30Mobile Safari 4.0 (GALAXY NOTE 3)mobile   IP]} \n";
macrolist += '{[PROXY_LOGIN]} \n';
macrolist += "wait seconds=1 \n";
macrolist += "URL GOTO=https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAlAmgQ&flowName=GlifWebSignIn&flowEntry=AddSession \n";
macrolist += "wait seconds=6 \n";
iimPlay(macrolist);

macrolist  = "CODE:"; 
macrolist += "SET !ERRORIGNORE YES \n";
macrolist += '{[AGENT]} \n';
macrolist += "SET !TIMEOUT_PAGE 9 \n"; 
macrolist += "SET !TIMEOUT_STEP 1 \n";
macrolist += "{[PROXY_IP]} \n";
macrolist += '{[PROXY_LOGIN]} \n';
macrolist += 'TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=ID:identifierId CONTENT="{[EMAIL]}" \n';
macrolist += "wait seconds=1 \n";
macrolist += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n";
macrolist += "wait seconds=2 \n";
macrolist += "SET !EXTRACT null \n";
macrolist += "TAG POS=1 TYPE=DIV ATTR=CLASS:o6cuMc EXTRACT=TXT \n";
macrolist += "wait seconds=1 \n";
iimPlay(macrolist);
var res1 = iimGetLastExtract();
if (res1.includes("t fin   d your Google Account"))
{
  macrolist2  = "CODE:";
  macrolist2 += "SET !ERRORIGNORE YES \n";
  macrolist2 += '{[AGENT]} \n';
  macrolist2 += "SET !TIMEOUT_PAGE 1 \n"; 
  macrolist2 += "SET !TIMEOUT_STEP 1 \n"
  macrolist2 += "{[PROXY_IP]} \n";
  macrolist2 += '{[PROXY_LOGIN]} \n';
  macrolist2 += "wait seconds= 1 \n";
  macrolist2 += "SET !EXTRACT null \n";
  macrolist2 += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]},{[RECOVERY]}{[PROXY]},UNFOUD \n";
  macrolist2 += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=open_error_gmail.txt \n";
  macrolist2 += "wait seconds=0.5 \n";
  macrolist2 += "TAB CLOSE\n";
  iimPlay(macrolist2);
}
else
{
  macrolist  = "CODE:";
  macrolist += "SET !ERRORIGNORE YES \n";
  macrolist += '{[AGENT]} \n';
  macrolist += "SET !TIMEOUT_PAGE 1 \n"; 
  macrolist += "SET !TIMEOUT_STEP 1 \n"
  macrolist += "{[PROXY_IP]} \n";
  macrolist += '{[PROXY_LOGIN]} \n';
  macrolist += "wait seconds= 1 \n";
  macrolist += "SET !EXTRACT null \n";
     macrolist += "TAG POS=1 TYPE=DIV ATTR=class:PrDSKc EXTRACT=TXT \n";
  iimPlay(macrolist);
  var rescouldnt = iimGetLastExtract();
  if (rescouldnt.includes("not a robot"))
  {
    macrolist2  = "CODE:";
    macrolist2 += "SET !ERRORIGNORE YES \n";
    macrolist2 += '{[AGENT]} \n';
    macrolist2 += "SET !TIMEOUT_PAGE 1 \n"; 
    macrolist2 += "SET !TIMEOUT_STEP 1 \n"
    macrolist2 += "{[PROXY_IP]} \n";
    macrolist2 += '{[PROXY_LOGIN]} \n';
    macrolist2 += "wait seconds= 1 \n";
    macrolist2 += "SET !EXTRACT null \n";
    macrolist2 += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]},{[RECOVERY]}{[PROXY]},confirm_youre_not_a_robot \n";
    macrolist2 += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=open_error_gmail.txt \n";
    macrolist2 += "wait seconds=0.5 \n";
    macrolist2 += "TAB CLOSE\n";
    iimPlay(macrolist2);
  }
  else
  {
    macrolist  = "CODE:";
    macrolist += "SET !ERRORIGNORE YES \n";
    macrolist += '{[AGENT]} \n';
    macrolist += "SET !T   IMEOUT_PAGE 1 \n"; 
    macrolist += "SET !TIMEOUT_STEP 1 \n"
    macrolist += "{[PROXY_IP]} \n";
    macrolist += '{[PROXY_LOGIN]} \n';
    macrolist += "wait seconds= 1 \n";
    macrolist += "SET !EXTRACT null \n";
    macrolist += "TAG POS=1 TYPE=H1 ATTR=ID:headingText EXTRACT=TXT \n";
    iimPlay(macrolist);
    var rescouldnt = iimGetLastExtract();
    if (rescouldnt.includes("t sign you in"))
    {
      macrolist2  = "CODE:";
      macrolist2 += "SET !ERRORIGNORE YES \n";
      macrolist2 += '{[AGENT]} \n';
      macrolist2 += "SET !TIMEOUT_PAGE 1 \n"; 
      macrolist2 += "SET !TIMEOUT_STEP 1 \n"
      macrolist2 += "{[PROXY_IP]} \n";
      macrolist2 += '{[PROXY_LOGIN]} \n';
      macrolist2 += "wait seconds= 1 \n";
      macrolist2 += "SET !EXTRACT null \n";
      macrolist2 += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]},{[RECOVERY]}{[PROXY]},usingdifferentbrowser \n";
      macrolist2 += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=open_error_gmail.txt \   n";
      macrolist2 += "wait seconds=0.5 \n";
      macrolist2 += "TAB CLOSE\n";
      iimPlay(macrolist2);
    }
    else
    {
      //****    PASSWORD    ****//
      macrolist ="CODE:";
      macrolist += "SET !ERRORIGNORE YES \n";
      macrolist += '{[AGENT]} \n';
      macrolist += "SET !TIMEOUT_PAGE 1 \n"; 
      macrolist += "SET !TIMEOUT_STEP 1 \n";
      macrolist += "{[PROXY_IP]}\n";
      macrolist += '{[PROXY_LOGIN]} \n';
      macrolist += "wait seconds= 1 \n";
      macrolist += 'TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/signin/v2/challenge/password/empty ATTR=NAME:password CONTENT="{[PASSWORD]}" \n';
      macrolist += "wait seconds=1 \n";
      macrolist += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n";
      macrolist += "wait seconds=2 \n";
      macrolist += "SET !EXTRACT null \n";
      macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Wrong<SP>password.<SP>* EXTRACT=TXT \n";
      macrolist += "wait seconds=1 \n";
      iimPlay(macrolist);
      var res2 = iimGetLastEx   tract();
      if (res2.includes("Wrong password"))
      {
        macrolist2  = "CODE:";
        macrolist2 += "SET !ERRORIGNORE YES \n";
        macrolist2 += '{[AGENT]} \n';
        macrolist2 += "SET !TIMEOUT_PAGE 1 \n"; 
        macrolist2 += "SET !TIMEOUT_STEP 1 \n";
        macrolist2 += "{[PROXY_IP]}\n";
        macrolist2 += '{[PROXY_LOGIN]}\n';
        macrolist2 += "wait seconds= 1 \n";
        macrolist2 += "SET !EXTRACT null \n";
        macrolist2 += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]},{[RECOVERY]}{[PROXY]},WRONG_PWD \n";
        macrolist2 += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=open_error_gmail.txt \n";
        macrolist2 += "TAB CLOSE\n";
        iimPlay(macrolist2);
      }
      else
      {
        //*** VERIFY IT'S YOU ***//
        macrolist  = "CODE:"; 
        macrolist += "SET !ERRORIGNORE YES \n";
        macrolist += '{[AGENT]} \n';
        macrolist += "SET !TIMEOUT_PAGE 1 \n"; 
        macrolist += "SET !TIMEOUT_STEP     1 \n";
        macrolist += "{[PROXY_IP]}\n";
        macrolist += '{[PROXY_LOGIN]} \n';
        macrolist += "wait seconds=1 \n";    
        macrolist += "SET !EXTRACT null \n";
        macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Verify<SP>it’s<SP>you EXTRACT=TXT \n";
        macrolist += "wait seconds=1 \n";
        iimPlay(macrolist);
        var res3 = iimGetLastExtract();
        if (res3.includes("Verify it’s you"))
        {
          //Try another way
          macrolist  = "CODE:"; 
          macrolist += "SET !ERRORIGNORE YES \n";
          macrolist += '{[AGENT]} \n';
          macrolist += "SET !TIMEOUT_PAGE 1 \n"; 
          macrolist += "SET !TIMEOUT_STEP 1 \n";
          macrolist += "{[PROXY_IP]}\n";
          macrolist += '{[PROXY_LOGIN]} \n';
          macrolist += "SET !EXTRACT null \n";
          macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Try<sp>* EXTRACT=TXT\n";
          iimPlay(macrolist);
          var res4 = iimGetLastExtract();
          if (res4.inclu   !des("Try another way"))
          {
            macrolist  = "CODE:";
            macrolist += "SET !ERRORIGNORE YES \n";
            macrolist += '{[AGENT]} \n';
            macrolist += "SET !TIMEOUT_PAGE 1 \n"; 
            macrolist += "SET !TIMEOUT_STEP 1 \n"
            macrolist += "{[PROXY_IP]} \n";
            macrolist += '{[PROXY_LOGIN]} \n';
            macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Try<sp>* \n";
            macrolist += "wait seconds=2\n";
            iimPlay(macrolist);
          }

          //Confirm your recovery email
          macrolist  = "CODE:"; 
          macrolist += "SET !ERRORIGNORE YES \n";
          macrolist += '{[AGENT]} \n';
          macrolist += "SET !TIMEOUT_PAGE 1 \n"; 
          macrolist += "SET !TIMEOUT_STEP 1 \n";
          macrolist += "{[PROXY_IP]}\n";
          macrolist += '{[PROXY_LOGIN]} \n';
          macrolist += "SET !EXTRACT null \n";
          macrolist += "TAG POS=2 TYPE=DIV ATTR=TXT:Confirm<SP>your<SP>recovery<SP>email   " EXTRACT=TXT \n";
          iimPlay(macrolist);
          var res5 = iimGetLastExtract();
          if (res5.includes("Confirm your recovery email"))
          {
            macrolist  = "CODE:";
            macrolist += "SET !ERRORIGNORE YES \n";
            macrolist += '{[AGENT]} \n';
            macrolist += "SET !TIMEOUT_PAGE 1 \n"; 
            macrolist += "SET !TIMEOUT_STEP 1 \n";
            macrolist += "{[PROXY_IP]}\n";
            macrolist += '{[PROXY_LOGIN]} \n';
            macrolist += "TAG POS=2 TYPE=DIV ATTR=TXT:Confirm<SP>your<SP>recovery<SP>email \n";
            macrolist += "wait seconds=3 \n";
            macrolist += 'TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=ID:identifierId CONTENT="{[RECOVERY]}" \n';
            macrolist += 'TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=ID:knowledge-preregistered-email-response CONTENT="{[RECOVERY]}" \n';
            macrolist += "wait seconds=1 \n";
            macrolist += "EVENT TYPE=CLICK XPATH=\"(//span[@c   #lass='VfPpkd-vQzf8d'])[1]\" BUTTON=0\n";
            macrolist += "wait seconds=2 \n";
            macrolist += "TAG POS=1 TYPE=SPAN ATTR=CLASS:jibhHc \n";
            macrolist += "wait seconds=3 \n";
            macrolist += "SET !EXTRACT null \n";
            macrolist += "TAG POS=1 TYPE=DIV ATTR=CLASS:o6cuM* EXTRACT=TXT \n";
            iimPlay(macrolist);
            var resinc1 = iimGetLastExtract();
            if (resinc1.includes("incorrect"))
            {
              macrolist2  = "CODE:";
              macrolist2 += "SET !ERRORIGNORE YES \n";
              macrolist2 += '{[AGENT]} \n';
              macrolist2 += "SET !TIMEOUT_PAGE 1 \n"; 
              macrolist2 += "SET !TIMEOUT_STEP 1 \n"
              macrolist2 += "{[PROXY_IP]} \n";
              macrolist2 += '{[PROXY_LOGIN]} \n';
              macrolist2 += "wait seconds=0.5 \n";
              macrolist2 += "SET !EXTRACT null \n";
              macrolist2 += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]},{   $[RECOVERY]}{[PROXY]},RECOVERY_INCORRECT \n";
              macrolist2 += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=open_error_gmail.txt \n";
              macrolist2 += "TAB CLOSE\n";
              iimPlay(macrolist2);
            }
            else
            {
              macrolist  = "CODE:";
              macrolist += "SET !ERRORIGNORE YES \n";
              macrolist += '{[AGENT]} \n';
              macrolist += "SET !TIMEOUT_PAGE 1 \n"; 
              macrolist += "SET !TIMEOUT_STEP 1 \n";
              macrolist += "{[PROXY_IP]}\n";
              macrolist += '{[PROXY_LOGIN]} \n';
              macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Not<sp>now \n";
              macrolist += "wait seconds=2 \n";
              iimPlay(macrolist);
            }

          }
          else
          {
            //Get a verification code at
            macrolist  = "CODE:";
            macrolist += "SET !ERRORIGNORE YES \n";
            macrolist += '{[AGENT]} \n';
            %   macrolist += "SET !TIMEOUT_PAGE 1 \n"; 
            macrolist += "SET !TIMEOUT_STEP 1 \n";
            macrolist += "{[PROXY_IP]}\n";
            macrolist += '{[PROXY_LOGIN]} \n';
            macrolist += "TAG POS=1 TYPE=DIV ATTR=TXT:Get<SP>a<SP>verification<SP>code<SP>at* EXTRACT=TXT \n";  
            iimPlay(macrolist);
            var res6 = iimGetLastExtract();
            if (res6.includes("Get a verification code at"))
            {
              macrolist  = "CODE:";
              macrolist += "SET !ERRORIGNORE YES \n";
              macrolist += '{[AGENT]} \n';
              macrolist += "SET !TIMEOUT_PAGE 5 \n"; 
              macrolist += "SET !TIMEOUT_STEP 1 \n";
              macrolist += "{[PROXY_IP]}\n";
              macrolist += '{[PROXY_LOGIN]} \n';
              macrolist += "TAG POS=5 TYPE=DIV ATTR=TXT:Get<SP>a<SP>verification<SP>code<SP>at* \n";
              macrolist += "wait seconds=3 \n";

              if ("{[RECOVERY]}".includes("mailnesia.com"))
           &      {
                macrolist += "TAB OPEN \n";
                macrolist += "TAB T=2 \n";
                macrolist += "URL GOTO=http://mailnesia.com/mailbox/"+"{[RECOVERY]}".split("@",1)+" \n";
                macrolist += "wait seconds=5 \n";
                macrolist += "TAG POS=1 TYPE=A ATTR=TXT:{[RECOVERY]} \n";
                macrolist += "wait seconds=1 \n";
                macrolist += "TAB T=2 \n";
                macrolist += "wait seconds=2 \n";
                macrolist += "TAG POS=1 TYPE=STRONG ATTR=TXT:* EXTRACT=TXT \n";
                iimPlay(macrolist);
                var res7 = iimGetLastExtract();

                if (res7 == null || res6.trim().length == 0)
                {
                  macrolist2  = "CODE:";
                  macrolist2 += "SET !ERRORIGNORE YES \n";
                  macrolist2 += '{[AGENT]} \n';
                  macrolist2 += "SET !TIMEOUT_PAGE 1 \n"; 
                  macrolist2 += "SET !TIMEOUT_STEP 1 \n"
                  macroli   'st2 += "{[PROXY_IP]} \n";
                  macrolist2 += '{[PROXY_LOGIN]} \n';
                  macrolist2 += "wait seconds=0.5 \n";
                  macrolist2 += "SET !EXTRACT null \n";
                  macrolist2 += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]},{[RECOVERY]}{[PROXY]},NOCODE_VERIFICATION_CODE_AT_RECOVERY_MAILNESIA \n";
                  macrolist2 += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=open_error_gmail.txt \n";
                  macrolist2 += "TAB CLOSE\n";
                  iimPlay(macrolist2);
                  //macrolist += "PAUSE \n";
                }
                else
                {
                  macrolist  = "CODE:";
                  macrolist += "SET !ERRORIGNORE YES \n";
                  macrolist += '{[AGENT]} \n';
                  macrolist += "SET !TIMEOUT_PAGE 1 \n"; 
                  macrolist += "SET !TIMEOUT_STEP 1 \n";
                  macrolist += "{[PROXY_IP]}\n";
                  macrolist += '{[PROXY_L   (OGIN]} \n';
                  macrolist += "TAB T=0 \n";
                  macrolist += "TAB CLOSEALLOTHERS \n";
                  macrolist += "wait seconds=1 \n";
                  macrolist += "TAG POS=1 TYPE=INPUT:TEL FORM=NAME:NoFormName ATTR=ID:idvPinId CONTENT="+res7+" \n";
                  macrolist += "wait seconds=1 \n";
                  macrolist += "EVENT TYPE=CLICK XPATH=\"(//span[@class='VfPpkd-vQzf8d'])[1]\" BUTTON=0\n";
                  macrolist += "wait seconds=3 \n";
                  macrolist += "TAG POS=1 TYPE=SPAN ATTR=CLASS:jibhHc \n";
                  macrolist += "wait seconds=2 \n";
                  macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Not<sp>now \n";
                  macrolist += "wait seconds=2 \n";
                  iimPlay(macrolist);
                }
              }
              else
              {
                macrolist2  = "CODE:";
                macrolist2 += "SET !ERRORIGNORE YES \n";
                macrolist2 += '{[AGENT]} \n';
    )               macrolist2 += "SET !TIMEOUT_PAGE 1 \n"; 
                macrolist2 += "SET !TIMEOUT_STEP 1 \n"
                macrolist2 += "{[PROXY_IP]} \n";
                macrolist2 += '{[PROXY_LOGIN]} \n';
                macrolist2 += "wait seconds=0.5 \n";
                macrolist2 += "SET !EXTRACT null \n";
                macrolist2 += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]},{[RECOVERY]}{[PROXY]},VERIFICATION_CODE_AT_RECOVERY \n";
                macrolist2 += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=open_error_gmail.txt \n";
                macrolist2 += "TAB CLOSE\n";
                iimPlay(macrolist2);
                
                //macrolist += "PAUSE \n";
                //iimPlay(macrolist);
              }
            }
            else
            {
              macrolist2  = "CODE:";
              macrolist2 += "SET !ERRORIGNORE YES \n";
              macrolist2 += '{[AGENT]} \n';
              macrolist2 += "SET !TIMEOUT_PAGE 1 \n"   *; 
              macrolist2 += "SET !TIMEOUT_STEP 1 \n";
              macrolist2 += "{[PROXY_IP]}\n";
              macrolist2 += '{[PROXY_LOGIN]}\n';
              macrolist2 += "wait seconds=0.5 \n";
              macrolist2 += "SET !EXTRACT null \n";
              macrolist2 += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]},{[RECOVERY]}{[PROXY]},NEED_OTHER_CONFIRMATION \n";
              macrolist2 += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=open_error_gmail.txt \n";
              macrolist2 += "TAB CLOSE\n";
              iimPlay(macrolist2);
            }
          }
        }

        /**********************   C O N N E C T E D   *************************************/  
        macrolist  = "CODE:";
        macrolist += "SET !ERRORIGNORE YES \n";
        macrolist += "SET !WAITPAGECOMPLETE YES \n";
        macrolist += '{[AGENT]} \n';
        macrolist += "SET !TIMEOUT_PAGE 5\n"; 
        macrolist += "SET !TIMEOUT_STEP 1 \n";
        macrolist += "{[PROXY_   +IP]}\n";
        macrolist += '{[PROXY_LOGIN]} \n';
        macrolist += "SET !EXTRACT null \n";
        macrolist += "wait seconds=0.5 \n";
        macrolist += "URL GOTO=https://myaccount.google.com/email?hl=en \n";
        macrolist += "wait seconds=1 \n";
        macrolist += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";
        macrolist += "WAIT SECONDS=6 \n";
        macrolist += "SET !EXTRACT null \n";
        macrolist += "SET !EXTRACT {{!URLCURRENT}} \n";
        macrolist += "wait seconds=1 \n";
        iimPlay(macrolist); 
        var currurl =  iimGetLastExtract();         
        if (currurl.includes("https://myaccount.google.com/"))
        {
          macrolist2  = "CODE:";
          macrolist2 += "SET !ERRORIGNORE YES \n";
          macrolist2 += '{[AGENT]} \n';
          macrolist2 += "SET !TIMEOUT_PAGE 1 \n"; 
          macrolist2 += "SET !TIMEOUT_STEP 1 \n";
          macrolist2 += "{[PROXY_IP]}\n";
          macrolist2 += '{[PROXY_LOGIN]} \n';   ,
          macrolist2 += "WAIT SECONDS=0.5 \n";
          macrolist2 += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]},{[RECOVERY]}{[PROXY]} \n";
          macrolist2 += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=open_success_gmail.txt \n";
          macrolist2 += "WAIT SECONDS=0.5 \n";
          iimPlay(macrolist2);

          //**** SECURITY CHECK ****//
          macrolist2  = "CODE:";
          macrolist2 += "SET !ERRORIGNORE YES \n";
          macrolist2 += "SET !WAITPAGECOMPLETE YES \n";
          macrolist2 += '{[AGENT]} \n';
          macrolist2 += "SET !TIMEOUT_PAGE 10 \n"; 
          macrolist2 += "SET !TIMEOUT_STEP 1 \n";
          macrolist2 += "{[PROXY_IP]}\n";
          macrolist2 += '{[PROXY_LOGIN]} \n';
          macrolist2 += "URL GOTO=https://mail.google.com/mail/u/0/#inbox  \n";
          macrolist2 += "WAIT SECONDS=0.5 \n";
          macrolist2 += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
          macrolist2 += "WAIT SECOND   -S=7 \n";
          macrolist2 += 'TAG POS=1 TYPE=INPUT ATTR=ARIA-LABEL:Search<SP>Mail&&TYPE:text CONTENT="subject:(Security alert) is:unread" \n';
          macrolist2 += "WAIT SECONDS=1 \n";
          macrolist2 += "TAG POS=1 TYPE=BUTTON ATTR=ARIA-LABEL:Search<SP>Mail&&ROLE:button&&TXT: \n";
          macrolist2 += "WAIT SECONDS=3 \n";
          macrolist2 += 'EVENT TYPE=CLICK POINT="(700,187)" \n';
          macrolist2 += "WAIT SECONDS=3 \n";
          macrolist2 += "TAG POS=1 TYPE=A ATTR=TXT:Check<SP>activity \n";
          macrolist2 += "WAIT SECONDS=3 \n";
          macrolist2 += "TAB T=2 \n"; 
          macrolist2 += "TAG POS=1 TYPE=SPAN ATTR=CLASS:VfPpkd-vQzf8d&&TXT:Yes,<SP>it<SP>was<SP>me \n";
          macrolist2 += "WAIT SECONDS=3 \n";
          macrolist2 += "TAB T=1 \n";
          macrolist2 += "TAB CLOSEALLOTHERS \n";
          iimPlay(macrolist2);

        }
        else
        {
          macrolist2  = "CODE:";
          macrolist2 += "SET !ERRORIGNORE YES \n";
              macrolist2 += '{[AGENT]} \n';
          macrolist2 += "SET !TIMEOUT_PAGE 1 \n"; 
          macrolist2 += "SET !TIMEOUT_STEP 1 \n"
          macrolist2 += "{[PROXY_IP]} \n";
          macrolist2 += '{[PROXY_LOGIN]} \n';
          macrolist2 += "wait seconds= 1 \n";
          macrolist2 += "SET !EXTRACT null \n";
          macrolist2 += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]},{[RECOVERY]}{[PROXY]},NOT_OPEN \n";
          macrolist2 += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=open_error_gmail.txt \n";
          iimPlay(macrolist2);
        }
        
        //**** END ****//
        macrolist  = "CODE:";
        macrolist += "SET !ERRORIGNORE YES \n";
        macrolist += '{[AGENT]} \n';
        macrolist += "SET !TIMEOUT_PAGE 1 \n"; 
        macrolist += "SET !TIMEOUT_STEP 1 \n";
        macrolist += "{[PROXY_IP]}\n";
        macrolist += '{[PROXY_LOGIN]} \n';
        macrolist += "TAB CLOSE\n";
        iimPlay(macrolist);
      }
    }
  }
}DESKTOP    += "TAB OPEN \n";
kokot += "TAB T=2\n";
kokot += "SET !ERRORIGNORE YES \n";
kokot += "SET !WAITPAGECOMPLETE YES \n";
kokot += "{[PROXY_IP]} \n";
kokot += '{[PROXY_LOGIN]} \n';
kokot += "WAIT SECONDS=0.5 \n";
kokot += "URL GOTO=https://myaccount.google.com/email?hl=en \n";
kokot += "TAB CLOSEALLOTHERS\n";
kokot += "WAIT SECONDS=4 \n";
kokot += "TAG POS=1 TYPE=DIV ATTR=CLASS:mMsbvc EXTRACT=TXT \n";
iimPlay(kokot);

var g_erroore = iimGetLastExtract(); 
kokot  = "CODE:SET !EXTRACT NULL \n";
kokot += '{[AGENT]} \n';
kokot += "SET !TIMEOUT_STEP 1 \n";
kokot += "SET !ERRORIGNORE YES \n";
kokot += "SET !VAR2 \""+g_erroore+"\"  \n";
kokot += "{[PROXY_IP]} \n";
kokot += '{[PROXY_LOGIN]} \n';
kokot += "ADD !EXTRACT {[CURRENT_PROFILE]},{{!VAR2}},{[CURRENT_DATE]}  \n";
kokot += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=check_profiles_gmail.txt  \n";
kokot += "WAIT SECONDS=2 \n";
kokot += "TAB CLOSE  \n";
iimPlay(kokot); desktop                                                         0 "TAB T=2 \n";  
macrolist     += "SET !TIMEOUT_PAGE 15 \n";  
macrolist     += "SET !TIMEOUT_STEP 1 \n";  
macrolist     += "URL GOTO=https://mail.google.com/mail/u/0/#inbox/ \n";  
macrolist     += "WAIT SECONDS=1 \n";  
macrolist     += "TAB CLOSEALLOTHERS\n";  
macrolist     += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
macrolist     += "WAIT SECONDS=5 \n";  
macrolist     += "URL GOTO=https://myaccount.google.com/security \n";  
macrolist     += "WAIT SECONDS=5 \n";  

iimPlay(macrolist);  

result         = null;  
macrolist      = "CODE:";  
macrolist     += '{[AGENT]} \n';
macrolist     += "{[PROXY_IP]} \n";
macrolist     += '{[PROXY_LOGIN]} \n';
macrolist     += "TAG POS=1 TYPE=H3 ATTR=TXT:Recovery<SP>phone \n";  
result         = iimPlay(macrolist);

if (result > 0)  
{  
    macrolist  = initGlobal;
    macrolist += "SET !ENCRYPTION NO \n";
    macrolist += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/signin/v2/challenge/password/empty ATTR=NAME:p   1assword CONTENT=\"{[OLD_PASSWORD]}\"\n";
    macrolist += "EVENT TYPE=CLICK SELECTOR=\"#passwordNext\" BUTTON=0 \n";
    macrolist += "wait seconds=6 \n";
    macrolist += "SET !VAR1 EVAL(\"var parts = \\\"{{!URLCURRENT}}\\\".split(\\\"&rapt=\\\"); parts[parts.length-1];\")\n";
    macrolist += "SET !extract {{!VAR1}}\n";
    macrolist += "wait seconds=2 \n";
    iimPlay(macrolist);  
    
    var varvalue=iimGetLastExtract(0);  
    macrolist  = initGlobal;
    macrolist += "URL GOTO=https://myaccount.google.com/signinoptions/password?utm_source=google-account&utm_medium=web&continue=https://myaccount.google.com/security&rapt="+varvalue+"\n";
    macrolist += "wait seconds=2 \n";
    iimPlay(macrolist);  
    
    result = null;  
    macrolist  = "CODE:";  
    macrolist += '{[AGENT]} \n';
    macrolist += "{[PROXY_IP]} \n";
    macrolist += '{[PROXY_LOGIN]} \n';
    macrolist += "TAG POS=1 TYPE=INPUT:PASSWORD ATTR=NAME:password \n";  
    result = iimPlay(macrolist);  
    
    if   2 (result > 0)  
    {  
        macrolist  = initGlobal;
        macrolist += "SET !ENCRYPTION NO \n";
        macrolist += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/signin/v2/challenge/password/empty ATTR=NAME:password CONTENT=\"{[OLD_PASSWORD]}\" \n";
        macrolist += "EVENT TYPE=CLICK SELECTOR=\"#passwordNext\" BUTTON=0 \n";
        macrolist += "wait seconds=2 \n";
        iimPlay(macrolist);  
    }  
    
    macrolist  = initGlobal;
    macrolist += "SET !ENCRYPTION NO \n";
    macrolist += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=name:password CONTENT=\"{[NEW_PASSWORD]}\"\n";
    macrolist += "wait seconds=1 \n";
    macrolist += "SET !ENCRYPTION NO \n";
    macrolist += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=name:confirmation_password CONTENT=\"{[NEW_PASSWORD]}\"\n";
    macrolist += "wait seconds=2 \n";
    macrolist += "EVENT TYPE=CLICK XPATH=\"(//div[contains(@class,'VfPpkd-dgl2Hf-ppHlrf-sM5MNb')])[1]\" BUTTON=0 \n";
    macrolist += "w   3ait seconds=6 \n";
    iimPlay(macrolist);  
    
    macrolist  = initGlobal;
    macrolist += "URL GOTO=https://myaccount.google.com/recovery/email?utm_source=google-account&utm_medium=web&rapt="+varvalue+"\n";
    macrolist += "wait seconds=2 \n";
    iimPlay(macrolist);  
    
    result = null;  
    macrolist  = "CODE:";  
    macrolist += '{[AGENT]} \n';
    macrolist += "{[PROXY_IP]} \n";
    macrolist += '{[PROXY_LOGIN]} \n';
    macrolist += "TAG POS=1 TYPE=INPUT:PASSWORD ATTR=NAME:password \n";  
    result = iimPlay(macrolist);  
    
    if (result > 0)  
    {  
        macrolist = initGlobal;
        macrolist += "SET !ENCRYPTION NO \n";
        macrolist += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/signin/v2/challenge/password/empty ATTR=NAME:password CONTENT=\"{[OLD_PASSWORD]}\"\n";
        macrolist += "EVENT TYPE=CLICK SELECTOR=\"#passwordNext\" BUTTON=0 \n";
        macrolist += "wait seconds=2 \n";
        iimPlay(macrolist);  
    }  
    
    macrolist =     initGlobal;
    macrolist += "TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=placeholder:you@example.com CONTENT=\"{[NEW_RECOVERY]}\" \n";
    macrolist += "wait seconds=1 \n";
    macrolist += "EVENT TYPE=CLICK XPATH=\"(//div[contains(@class,'VfPpkd-RLmnJb')])[2]\" BUTTON=0 \n";
    macrolist += "WAIT SECONDS=3 \n";
    iimPlay(macrolist);  
    
    macrolist  = initGlobal;
    macrolist += "SET !ERRORIGNORE YES\n";
    macrolist += "ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
    macrolist += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=change_password_success_gmail.txt\n";
    macrolist += "TAB CLOSE\n"
    iimPlay(macrolist);  
}  
else  
{  
    macrolist  = initGlobal;
    macrolist += "SET !ERRORIGNORE YES\n";
    macrolist += "ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
    macrolist += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=change_password_error_gmail.txt\n";
    macrolist += "TAB CLOSE\n"
    iimPlay(macrolist);  
} desktop   8 ���o8                                                                                                                                                                                                                                                                                                    5	 IGMAILREPORTING INBOX - HTML VERSIONdesktop4	 GGMAILREPORTING SPAM - HTML VERSIONdesktop�-
 )�GMAILCHECK PROFILESvar kokot = "CODE:SET !EXTRACT NULL \n";
kokot += '{[AGENT]} \n';
kokot    .��B !_��yGMAILOPEN SEEDSEMAIL/PASSWORD/RECOVERY/IP:PORT:USER:PASSvar res3,macrolist,macrolist2,macrolist3;
    
macrolist  = "CODE:"; 
macrolist += "SET !ERRORIGNORE YES \n";
macrolist += "CLEAR\n";
macrolist += '{[AGENT]} \n';
macrolist += "SET !TIMEOUT_PAGE 9 \n"; 
macrolist += "SET !TIMEOUT_STEP 1 \n";
macrolist += "TAB T=1 \n";
macrolist += "TAB CLOSEALLOTHERS \n";
macrolist += "{[PROXY_   &	 +GMAILREPORTING INBOXdesktop%	 )GMAILREPORTING SPAMdesktop                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            �c
 +Y�9GMAILCHANGE PASSWORDOLD_PASSWORD/NEW_PASSWORD/NEW_RECOVERYvar j, boc,i,macrolist,result;

var initGlobal = "CODE:";
initGlobal    += "SET !ERRORIGNORE YES\n";
initGlobal    += '{[AGENT]} \n';
initGlobal    += "SET !TIMEOUT_STEP 3\n";
initGlobal    += "SET !TIMEOUT_PAGE 3\n";
initGlobal    += "SET !WAITPAGECOMPLETE YES\n";
initGlobal    += "{[PROXY_IP]} \n";
initGlobal    += '{[PROXY_LOGIN]} \n';

macrolist      = initGlobal; 
macrolist     += "TAB OPEN \n";  
macrolist     +=   /   7t    += "TAB CLOSEALLOTHERS\n";
macrolist    += "wait seconds=5 \n";
macrolist    += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:https://mail.google.com/mail/u/0/h/* ATTR=* \n";
macrolist    += "wait seconds=4 \n";
macrolist    += "URL GOTO= https://mail.google.com/mail/u/0/h/1v17hhydg3ywy/?&v=prg \n";
macrolist    += "wait seconds=10 \n";
macrolist    += "TAG POS=1 TYPE=SELECT FORM=NAME:f ATTR=NAME:p_sx_dl CONTENT=%en \n";
macrolist    += "wait seconds=3 \n";
macrolist    += "TAG POS=1 TYPE=SELECT FORM=NAME:f ATTR=NAME:p_ix_nt CONTENT=%100 \n";
macrolist    += "wait seconds=1 \n";
macrolist    += "TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:f ATTR=ID:sx_sg_0 \n";
macrolist    += "wait seconds=2 \n";
macrolist    += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:f ATTR=NAME:nvp_a_prefs \n";
macrolist    += "wait seconds=4  \n";
iimPlay(macrolist);

macrolist     = "CODE:";
macrolist    += "SET !ERRORIGNORE YES \n";
macrolist    += '{[AGENT]} \n';
macrolist    += "SET !TIMEOUT_PAGE 15 \n";
macrolist    +   8= "SET !TIMEOUT_STEP 1 \n";
macrolist    += "{[PROXY_IP]} \n";
macrolist    += '{[PROXY_LOGIN]} \n';
macrolist    += "URL GOTO=https://myaccount.google.com/language \n";
macrolist    += "WAIT SECONDS=1 \n"
macrolist    += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";
macrolist    += "WAIT SECONDS=10 \n";
macrolist    += "TAG POS=2 TYPE=BUTTON ATTR=CLASS:VfPpkd-Bz112c-LgbsSe<SP>yHy1rc<SP>eT1oJ<SP>* \n";
macrolist    += "WAIT SECONDS=2 \n";
macrolist    += "TAG POS=1 TYPE=LI ATTR=TXT:ENGLISH \n";
macrolist    += "WAIT SECONDS=2 \n";
macrolist    += "TAG POS=1 TYPE=LI ATTR=TXT:United<SP>States \n";
macrolist    += "WAIT SECONDS=2 \n";
macrolist    += "TAG POS=1 TYPE=BUTTON ATTR=jscontroller:soHxf&&data-mdc-dialog-action:ok&&class:VfPpkd-LgbsSe<sp>VfPpkd-LgbsSe-OWXEXe-dgl2Hf<sp>ksBjEc<sp>lKxP2d<sp>*\n";
macrolist    += "WAIT SECONDS=5 \n";
iimPlay(macrolist);

macrolist     = "CODE:";
macrolist    += "SET !ERRORIGNORE YES \n";
macrolist    += '{[AGENT]} \n';
macrolist      9 += "SET !TIMEOUT_PAGE 15 \n";
macrolist    += "SET !TIMEOUT_STEP 1 \n";
macrolist    += "{[PROXY_IP]} \n";
macrolist    += '{[PROXY_LOGIN]} \n';
macrolist    += "URL GOTO=https://mail.google.com/mail/u/0/#settings/general  \n";
macrolist    += "WAIT SECONDS=1 \n"
macrolist    += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";
macrolist    += "wait seconds=10 \n";
macrolist    += "EVENT TYPE=CLICK SELECTOR=HTML>BODY>DIV>DIV:nth-of-type(2)>A>DIV>DIV BUTTON=0 \n";
macrolist    += "wait seconds=6 \n";
macrolist    += "URL GOTO=https://mail.google.com/mail/u/0/#settings/general \n";
macrolist    += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";
macrolist    += "URL GOTO=https://mail.google.com/mail/u/0/#settings/general \n";
macrolist    += "wait seconds=10 \n";
macrolist    += "TAG POS=1 TYPE=LABEL ATTR=TXT:Conversation<SP>view<SP>off \n";
macrolist    += "wait seconds=3 \n";
macrolist    += "TAG XPATH=\"//a[starts-with(@href,'https://mail.google.com/mail/u/   :0/#settings/inbox')]\"\n";
macrolist    += "TAG POS=1 TYPE=INPUT:RADIO ATTR=class:aKb&&name:bx_ioao \n"; 
macrolist    += "wait seconds=2 \n";
macrolist    += "TAG POS=1 TYPE=A ATTR=TXT:Forwarding<SP>and<SP>POP/IMAP  \n";
macrolist    += "wait seconds=1 \n";
macrolist    += "TAG POS=1 TYPE=SELECT ATTR=ID::en CONTENT=%2 \n";
macrolist    += "wait seconds=1 \n";
macrolist    += "TAG POS=1 TYPE=BUTTON ATTR=NAME:ok \n";
macrolist    += "wait seconds=1 \n";
macrolist    += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Save<SP>Changes \n";
macrolist    += "wait seconds=5 \n";
macrolist    += "EVENT TYPE=CLICK SELECTOR=HTML>BODY>DIV:nth-of-type(7)>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>SPAN BUTTON=0 \n";
macrolist    += "wait seconds=1 \n";
iimPlay(macrolist);

var statics   = "CODE:";
statics      += "SET !ERRORIGNORE YES\n";
statics      += '{[AGENT]} \n';
statics      += "SET !TIMEOUT_PAGE 10\n";
statics      += "SET !TIMEOUT_STEP 2\n";
statics      += "TAB T=1\n";
statics      += "{[PRO    XY_IP]} \n";
statics      += '{[PROXY_LOGIN]} \n';

var macroTest;
macroTest     = "CODE:";
macroTest    += '{[AGENT]} \n';
macroTest    += "{[PROXY_IP]} \n";
macroTest    += '{[PROXY_LOGIN]} \n';
macroTest    += "TAG XPATH= (//div[@role='button'])[8] \n";

if(iimPlay(macroTest)>0)
{
        var NotFound = statics;
        NotFound    += "SET !ERRORIGNORE YES\n";
        NotFound    += "ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
        NotFound    += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=change_language_setting_success_gmail.txt\n";
        NotFound    += "TAB CLOSE\n"
        iimPlay(NotFound);
}
else
{
        var NotFound = statics;
        NotFound    += "SET !ERRORIGNORE YES\n";
        NotFound    += "ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
        NotFound    += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=change_language_setting_error_gmail.txt\n";
        NotFound    += "TAB CLOSE\n";
        iimPlay(NotFound);
}desktop   � �                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         �
 ?�/GMAILCHANGE LANGUAGE & SETTINGvar j,i,l,p,g,r,page,macrolist;
macrolist     = "CODE:";
macrolist    += "SET !ERRORIGNORE YES \n";
macrolist    += '{[AGENT]} \n';
macrolist    += "SET !TIMEOUT_PAGE 15 \n";
macrolist    += "SET !TIMEOUT_STEP 1 \n";
macrolist    += "TAB OPEN \n";
macrolist    += "TAB T=2\n";
macrolist    += "{[PROXY_IP]} \n";
macrolist    += '{[PROXY_LOGIN]} \n';
macrolist    += "URL GOTO=https://mail.google.com/mail/u/0/h/1v17hhydg3ywy/?&v=prg \n";
macrolist    += "WAIT SECONDS=1\n";
macrolis   6   =;  
macrolist        += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
macrolist        += "WAIT SECONDS=10 \n";  
iimPlay(macrolist);  

result            = null;  
macrolist         = "CODE:";  
macrolist        += '{[AGENT]}\n';
macrolist        += "{[PROXY_IP]} \n";
macrolist        += '{[PROXY_LOGIN]} \n';
macrolist        += "TAG POS=1 TYPE=A ATTR=TXT:Inbox \n";  
result = iimPlay(macrolist); 

if (result > 0)  
{  
    macrolist     = initGlobal;
    //--------GENERAL--------
    macrolist    += "URL GOTO =https://mail.google.com/mail/u/0/#settings/general \n";
    macrolist    += "WAIT SECONDS=1\n";
    macrolist    += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
    macrolist    += "WAIT SECONDS=10\n";
    macrolist    += "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=VALUE:1&&CLASS:qE&&TYPE:checkbox CONTENT=NO\n"; //(non)Activer les outils de saisie
    macrolist    += "EVENT TYPE=CLICK SELECTOR=\".nH .a5p option:nth-of-type(12)\" BUTTON=0\n";   > // Change Langue to english
    macrolist    += "EVENT TYPE=CLICK SELECTOR=\".cf.rc .rA option\" BUTTON=0\n"; //Taille maximale de page :10
    macrolist    += "TAG XPATH=\"//input[@name='bx_vmb' and @value ='1']\" \n"; //Mode Conversation: d�sactiv�
    macrolist    += "WAIT SECONDS=3\n";
    //------- INBOX--------------
    macrolist    += "TAG XPATH=\"//a[starts-with(@href,'https://mail.google.com/mail/u/0/#settings/inbox')]\"\n";
    macrolist    += "TAG POS=1 TYPE=SELECT ATTR=NAME:inbox-type CONTENT=#1\n"; //Default
    macrolist    += "WAIT SECONDS=1\n";
    macrolist    += "EVENT TYPE=CLICK SELECTOR=\".J-J5-Ji.alH:nth-of-type(1)\" BUTTON=0 \n"; //Option
    macrolist    += "WAIT SECONDS=1\n";
    macrolist    += "EVENT TYPE=CLICK SELECTOR=\".jQjAxd .SK.AX .J-N.J-Ks[size='5']\" BUTTON=0 \n"; //Afficher 5 message
    macrolist    += "WAIT SECONDS=1\n";
    macrolist    += "TAG POS=1 TYPE=INPUT:RADIO ATTR=class:aKb&&name:bx_ioao \n"; //Show markes
    macrolist    += "WAIT SECONDS=2   ?\n";
    //-------FORWARDING ---------------
    macrolist    += "TAG XPATH=\"//a[starts-with(@href,'https://mail.google.com/mail/u/0/#settings/fwdandpop')]\"\n";
    macrolist    += "WAIT SECONDS=4\n";
    macrolist    += "TAG POS=1 TYPE=INPUT:RADIO ATTR=NAME:sx_em\n"; //D�sactiver le transfert
    macrolist    += "WAIT SECONDS=2\n";
    //-------CHAT ---------------
    macrolist    += "TAG XPATH=\"//a[starts-with(@href,'https://mail.google.com/mail/u/0/#settings/chat')]\"\n";
    macrolist    += "EVENT TYPE=CLICK SELECTOR=\".no .nH.r4 .cf .aVF\" BUTTON=0 \n"; //Chat d�sactiver
    macrolist    += "WAIT SECONDS=1\n";
    //--------SAVE BUTTON -------
    macrolist    += "TAG XPATH=\"(//div[@class='rU']//button[1])[2]\"\n"; //Save
    macrolist    += "WAIT SECONDS=4\n";
    //--------labels--------
    macrolist    += "WAIT SECONDS=6\n";
    macrolist    += "URL GOTO =https://mail.google.com/mail/u/0/#settings/general \n";
    macrolist    += "WAIT SECONDS=1\n";
    macrolist    += "   @EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
    macrolist    += "WAIT SECONDS=6\n";
    macrolist    += "TAG XPATH=\"//a[starts-with(@href,'https://mail.google.com/mail/u/0/#settings/labels')]\"\n";
    macrolist    += "WAIT SECONDS=3\n";
    macrolist    += "TAG POS=1 TYPE=SPAN ATTR=TXT:hide \n"; // hide Starred
    macrolist    += "TAG POS=2 TYPE=SPAN ATTR=TXT:hide \n"; //hide Snoozed
    macrolist    += "TAG POS=3 TYPE=SPAN ATTR=TXT:hide \n"; //hide Important
    macrolist    += "TAG POS=4 TYPE=SPAN ATTR=TXT:hide \n"; //hide Chats
    macrolist    += "TAG POS=5 TYPE=SPAN ATTR=TXT:hide \n"; //hide Sent
    macrolist    += "TAG POS=6 TYPE=SPAN ATTR=TXT:hide \n"; //hide Scheduled
    macrolist    += "TAG POS=7 TYPE=SPAN ATTR=TXT:hide \n"; //hide Drafts
    macrolist    += "TAG POS=8 TYPE=SPAN ATTR=TXT:hide \n"; //hide All Mail
    macrolist    += "TAG POS=9 TYPE=SPAN ATTR=TXT:show \n"; //show SPAM
    macrolist    += "TAG POS=10 TYPE=SPAN ATTR=TXT:show \n"; //show Trash   A
    macrolist    += "TAG POS=13 TYPE=SPAN ATTR=TXT:show \n"; //show Social
    macrolist    += "TAG POS=15 TYPE=SPAN ATTR=TXT:show \n"; //show Updates
    macrolist    += "TAG POS=17 TYPE=SPAN ATTR=TXT:show \n"; //show Forums
    macrolist    += "TAG POS=19 TYPE=SPAN ATTR=TXT:show \n"; //show Promotions
    macrolist    += "WAIT SECONDS=3\n";
    //--------Filtre--------
    macrolist    += "URL GOTO=https://mail.google.com/mail/u/0/#settings/general\n";
    macrolist    += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
    macrolist    += "WAIT SECONDS=12\n";
    macrolist    += "TAG POS=1 TYPE=A ATTR=TXT:Filters<SP>and<SP>Blocked<SP>Addresses\n";
    macrolist    += "WAIT SECONDS=2\n";
    macrolist    += "TAG POS=1 TYPE=SPAN ATTR=TXT:All\n"; //Select: All
    macrolist    += "WAIT SECONDS=2\n";
    macrolist    += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Delete\n";
    macrolist    += "WAIT SECONDS=2\n";
    macrolist    += "TAG POS=1 TYPE=BUTTON ATTR=NAME:ok \n";
    macrol    ist    += "WAIT SECONDS=3\n";
    macrolist    += "URL GOTO =https://mail.google.com/mail/u/0/?pli=1#inbox \n";
    macrolist    += "WAIT SECONDS=1\n";
    macrolist    += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
    macrolist    += "WAIT SECONDS=6\n";
    macrolist    += "EVENT TYPE=CLICK XPATH=\"(//div/span[contains(@class,'e w-asJ')])[1]\"\n"; //End Now
    macrolist    += "WAIT SECONDS=1\n";
    macrolist    += "TAG POS=1 TYPE=SPAN ATTR=TXT:End<SP>now\n";
    macrolist    += "WAIT SECONDS=1\n";
    iimPlay(macrolist);  
    
    macrolist     = initGlobal;
    macrolist    += "TAB CLOSE \n";  
    iimPlay(macrolist);  
}  
else  
{  
    macrolist     = initGlobal;
    macrolist    += "SET !ERRORIGNORE YES\n";
    macrolist    += "ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
    macrolist    += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=config_error_gmail.txt\n";
    macrolist    += "TAB CLOSE\n";
    iimPlay(macrolist);  
} 	desktop    �  �                                                                                                                                                                                                                                  �u	
 %�/GMAILCONFIG SEEDSvar j,i,macrolist,result,initGlobal;
initGlobal        = "CODE:";
initGlobal       += "SET !ERRORIGNORE YES\n";
initGlobal       += '{[AGENT]} \n';
initGlobal       += "SET !TIMEOUT_STEP 3\n";
initGlobal       += "SET !TIMEOUT_PAGE 3\n";
initGlobal       += "SET !WAITPAGECOMPLETE YES\n";
initGlobal       += "{[PROXY_IP]} \n";
initGlobal       += '{[PROXY_LOGIN]} \n';

macrolist         = initGlobal; 
macrolist        += "TAB OPEN \n";  
macrolist        += "TAB T=2 \n";  
macrolist        += "SET !TIMEOUT_PAGE 15 \n";  
macrolist        += "SET !TIMEOUT_STEP 1 \n";  
macrolist        += "URL GOTO=https://mail.google.com/mail/u/0/#inbox/ \n";  
macrolist        += "WAIT SECONDS=1 \n";  
macrolist        += "TAB CLOSEALLOTHERS\n"   <   Dndom() * 20000);
    '----------------------------------------------------------------------------------------------'
    var initGlobal = "CODE:";
    initGlobal += "SET !ERRORIGNORE YES\n";
    initGlobal += '{[AGENT]}\n';
    initGlobal += "SET !TIMEOUT_STEP 2\n";
    initGlobal += "SET !TIMEOUT_PAGE 2\n";
    initGlobal += "SET !WAITPAGECOMPLETE YES\n";
    initGlobal += "TAB OPEN \n";
    initGlobal += "TAB T=2 \n";
    initGlobal += "TAB CLOSEALLOTHERS\n";
    initGlobal += "{[PROXY_IP]} \n";
    initGlobal += '{[PROXY_LOGIN]} \n';
    initGlobal += "\n";
    //-----------------------------------------------------------------------------------
    var signInScenario = initGlobal;
    signInScenario += "CLEAR\n";
    signInScenario += "URL GOTO=http://whatsmyuseragent.org/\n";
    signInScenario += "WAIT SECONDS=1\n";
    signInScenario += "TAB CLOSEALLOTHERS\n";
    signInScenario += "WAIT SECONDS=2\n";
    signInScenario += "\n'START Sign IN ====================================   E=======================\n\n";
    signInScenario += "URL GOTO=https://accounts.google.com/signin/v2/identifier?service=mail\n";
    signInScenario += "WAIT SECONDS=5\n";
    signInScenario += "EVENTS TYPE=KEYPRESS SELECTOR=\"#identifierId\" CHARS=\"{[EMAIL]}\"\n";
    signInScenario += "WAIT SECONDS=1\n";
    signInScenario += "EVENT TYPE=CLICK SELECTOR=\"#identifierNext\" BUTTON=0\n"; 
    signInScenario += "WAIT SECONDS="+getRandomDelay(5, 7)+"\n";
    //-----------------------------------------------------------------------------------
    var signInSetPassword = initGlobal;
    //signInSetPassword += "SET !EXTRACT {{line_content}}\n";
    signInSetPassword += "EVENTS TYPE=KEYPRESS SELECTOR=\"input[name='password']\" CHARS=\"{[OLD_PASS]}\"\n";
    signInSetPassword += "WAIT SECONDS=1.5\n";
    signInSetPassword += "EVENT TYPE=CLICK SELECTOR=\"#passwordNext\" BUTTON=0\n";
    signInSetPassword += "WAIT SECONDS="+getRandomDelay(5, 7)+"\n";
    signInSetPassword += "\n'END Sign IN ==========   F=================================================\n\n";
    //-----------------------------------------------------------------------------------
    var fillRecoveryScenario = initGlobal;
    // fillRecoveryScenario += "SET !EXTRACT {{line_content}}\n";
    //fillRecoveryScenario += "ADD !EXTRACT {{recovery}}\n";
    fillRecoveryScenario += "\n'FILL RECOVERY MAIL ===========================================================\n\n";
       fillRecoveryScenario += "EVENT TYPE=CLICK XPATH=\"(//*[local-name()='path' ][@d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z'])\" BUTTON=0\n";
    fillRecoveryScenario += "EVENT TYPE=CLICK SELECTOR=\"lCoei<SP>YZVTmd<SP>SmR8[data-challengetype='12']\" BUTTON=0\n";
    fillRecoveryScenario += "WAIT SECONDS=3\n";
       fillRecoveryScenario += "EVENT TYPE=CLICK XPATH=\"(//*[local-name()='path' ][@d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8   Gl8 5 8-5v10zm-8-7L4 6h16l-8 5z'])\" BUTTON=0\n";
    fillRecoveryScenario += "EVENTS TYPE=KEYPRESS SELECTOR=\"#knowledge-preregistered-email-response\" CHARS=\"{[OLD_RECOVERY_EMAIL]}\"\n";
    fillRecoveryScenario += "WAIT SECONDS=1\n";
       fillRecoveryScenario += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next\n";
    fillRecoveryScenario += "EVENT TYPE=CLICK SELECTOR=\".ZFr60d.CeoRYc\" BUTTON=0\n";
    fillRecoveryScenario += "WAIT SECONDS=5\n";
    //-----------------------------------------------------------------------------------
        var acceptTerms = initGlobal;
    //acceptTerms += "SET !EXTRACT {{line_content}}\n";
    acceptTerms += "\n'START accept Terms ===========================================================\n\n";
    acceptTerms += "WAIT SECONDS=2\n";
    acceptTerms += "EVENT TYPE=CLICK SELECTOR=\".U26fgb.XHsn7e\" BUTTON=0\n";
    acceptTerms += "WAIT SECONDS=2\n";
    acceptTerms += "EVENT TYPE=CLICK SELECTOR=\".U26fgb.XHsn7e\" BUTTON=0\n";
    acceptTerms += "WAIT SECONDS=2\n   H";
    acceptTerms += "EVENT TYPE=CLICK SELECTOR=\".U26fgb.XHsn7e\" BUTTON=0\n";
    acceptTerms += "WAIT SECONDS=2\n";
    acceptTerms += "EVENT TYPE=CLICK SELECTOR=\".ZFr60d.CeoRYc\" BUTTON=0\n";
    acceptTerms += "WAIT SECONDS=5\n";
    acceptTerms += "\n'END accept Terms ===========================================================\n\n";
    //-----------------------------------------------------------------------------------
    var changeRecovPassSignOutScenariosINIT_link = initGlobal;
    changeRecovPassSignOutScenariosINIT_link += "WAIT SECONDS=5\n";
    //changeRecovPassSignOutScenariosINIT_link += "SET !EXTRACT {{line_content}}\n";
    changeRecovPassSignOutScenariosINIT_link += "\n'START CHANGE RECOVERY MAIL =========================================\n\n";
    changeRecovPassSignOutScenariosINIT_link += "URL GOTO=https://accounts.google.com/signin/v2/sl/pwd?service=accountsettings&passive=1209600&osid=1&continue=https%3A%2F%2Fmyaccount.google.com%2Frecovery%2Femail&followup=https%3A%2F   I%2Fmyaccount.google.com%2Frecovery%2Femail&emr=1&mrp=security&authuser=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin\n";
    changeRecovPassSignOutScenariosINIT_link += "WAIT SECONDS=6\n";
    //-----------------------------------------------------------------------------------
    var changeRecovPassSignOutScenariosINIT_pass = initGlobal;
    // changeRecovPassSignOutScenariosINIT_pass += "SET !EXTRACT {{line_content}}\n";
    changeRecovPassSignOutScenariosINIT_pass += "EVENTS TYPE=KEYPRESS SELECTOR=\"[name='password']\" CHARS=\"{[NEW_PASS]}\"\n";
    changeRecovPassSignOutScenariosINIT_pass += "WAIT SECONDS=1\n";
    changeRecovPassSignOutScenariosINIT_pass += "EVENT TYPE=CLICK SELECTOR=\"#passwordNext\" BUTTON=0\n";
    changeRecovPassSignOutScenariosINIT_pass += "WAIT SECONDS="+getRandomDelay(5, 7)+"\n";

    //-----------------------------------------------------------------------------------
    var changeRecoveryOpenPassLink = initGlobal;
    //changeRecoveryOpenPassLink += "SET !EXT   JRACT {{line_content}}\n";
    //changeRecoveryOpenPassLink += "EVENT TYPE=CLICK XPATH=\"(//div[@role='button'])[6]\" BUTTON=0\n";
    changeRecoveryOpenPassLink += "TAG POS=1 TYPE=SPAN ATTR=CLASS:DPvwYc<SP>UWxmNc \n";
    changeRecoveryOpenPassLink += "EVENT TYPE=KEYPRESS XPATH=\"//input[@placeholder='you@example.com']\" Char=\"a\" MODIFIERS=\"ctrl\" \n";
    changeRecoveryOpenPassLink += "WAIT SECONDS=2\n";
    changeRecoveryOpenPassLink += "TAG XPATH=\"//input[@placeholder='you@example.com']\" CONTENT=\"{[NEW_RECOVERY]}\"\n";
    changeRecoveryOpenPassLink += "TAG POS=1 TYPE=INPUT ATTR=TYPE:email CONTENT=\"{[NEW_RECOVERY]}\"\n";
    changeRecoveryOpenPassLink += "WAIT SECONDS=1\
    ";
    changeRecoveryOpenPassLink += "EVENT TYPE=CLICK XPATH=\"(//div[contains(@class,'VfPpkd-RLmnJb')])[2]\" BUTTON=0\n";
    changeRecoveryOpenPassLink += "TAG POS=1 TYPE=SPAN ATTR=CLASS:CwaK9\n";
    //changeRecoveryOpenPassLink += "ADD !EXTRACT \"Recovery Mail Changed\"\n";
    changeRecoveryOpenPassLink += "   K\n'END CHANGE RECOVERY MAIL ===========================================\n\n";
    changeRecoveryOpenPassLink += "WAIT SECONDS=10 \n";
    changeRecoveryOpenPassLink += "TAB CLOSE \n";

    //-----------------------------------------------------------------------------------
    var openChangePassword = initGlobal;
    openChangePassword += "\n'START CHANGE PASSWORD =========================================\n\n";
    openChangePassword += "URL GOTO=https://accounts.google.com/signin/v2/identifier?service=accountsettings&passive=1209600&osid=1&continue=https%3A%2F%2Fmyaccount.google.com%2Fsigninoptions%2Fpassword&followup=https%3A%2F%2Fmyaccount.google.com%2Fsigninoptions%2Fpassword&emr=1&mrp=security&authuser=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin&hl=en\n";
    openChangePassword += "WAIT SECONDS=6\n";
    //openChangePassword += "SET !EXTRACT {{line_content}}\n";
    openChangePassword += "EVENTS TYPE=KEYPRESS SELECTOR=\"[name='password']\" CHARS=\"{[OLD_PASS]}\"\n";
    openChangePass   Lword += "WAIT SECONDS="+getRandomDelay(5, 6)+"\n";
    openChangePassword += "EVENT TYPE=CLICK SELECTOR=\"#passwordNext\" BUTTON=0\n";
    openChangePassword += "WAIT SECONDS="+getRandomDelay(5, 6)+"\n";
    //-----------------------------------------------------------------------------------
    var changePasswordSignOut = initGlobal;
    //changePasswordSignOut += "SET !EXTRACT {{line_content}}\n";
    changePasswordSignOut += "EVENTS TYPE=KEYPRESS SELECTOR=\"[name='password']\" CHARS=\"{[NEW_PASS]}\"\n";
    changePasswordSignOut += "WAIT SECONDS="+getRandomDelay(1, 2)+"\n";
    changePasswordSignOut += "EVENTS TYPE=KEYPRESS SELECTOR=\"[name='confirmation_password']\" CHARS=\"{[NEW_PASS]}\"\n";
    changePasswordSignOut += "WAIT SECONDS="+getRandomDelay(1, 2)+"\n";
    //changePasswordSignOut += "EVENT TYPE=CLICK XPATH=\"(//div[@role='button'])[8]\" BUTTON=0\n";
    changePasswordSignOut += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next\n";
    changePasswordSignOut += "TAG POS=1 TYPE=BUTTON ATTR=TXT   M:Change<SP>password\n";
    changePasswordSignOut += "TAG POS=1 TYPE=DIV ATTR=CLASS:ZFr60d<SP>CeoRYc\n";
    //changePasswordSignOut += "ADD !EXTRACT \"PASSWORD Changed\"\n";
    changePasswordSignOut += "\n'END CHANGE PASSWORD =========================================\n\n";
    changePasswordSignOut += "\n'START SIGN OUT ==========================================\n\n";
    //changePasswordSignOut += "WAIT SECONDS="+getRandomDelay(5, 7)+"\n";
    //changePasswordSignOut += "TAG XPATH=\"//a[starts-with(@href,'https://accounts.google.com/SignOutOptions')]\"\n";
    //changePasswordSignOut += "WAIT SECONDS=1\n";
    //changePasswordSignOut += "TAG XPATH=\"//a[starts-with(@href,'https://accounts.google.com/Logout')]\"\n";
    //changePasswordSignOut += "WAIT SECONDS="+getRandomDelay(5, 7)+"\n";
    //changePasswordSignOut += "ADD !EXTRACT \"SIGN OUT\"\n";
    //changePasswordSignOut += "\n'END SIGN OUT ==========================================\n\n";
    //-----------------------------------------   N------------------------------------------

    //--------------------------------------------------------------------------------------------
    /*var phone_number_format_2 = initGlobal;
    //phone_number_format_2 += "SET !EXTRACT null\n";
    // phone_number_format_2 += "ADD !EXTRACT \"EMAIL\"\n";
    //phone_number_format_2 += "ADD !EXTRACT \"Phone NUMBER Requested FORMAT_2\"\n"*/
    //-----------------------------------------------------------------------------------
    var password_fail = initGlobal;
    //password_fail += "SET !EXTRACT {{line_content}}\n";
    //password_fail += "TAG POS=1 TYPE=DIV ATTR=CLASS:*dEOOab* EXTRACT=TXT\n";
    //-----------------------------------------------------------------------------------
    var add_box_info_to_the_log = initGlobal;
    // add_box_info_to_the_log += "SET !EXTRACT null\n";
    //add_box_info_to_the_log += "SET !EXTRACT \"{{line_content}}\"\n";
    //add_box_info_to_the_log += "ADD !EXTRACT \";EMAIL,OLD_PASSWORD,OLD_RECOVERY_EMAIL,   O\"{[NEW_PASS]}\",NEW_RECOVERY_EMAIL,{{!COL6}},{{!COL7}}\"\n";
    //-----------------------------------------------------------------------------------
    var init_cnx_tester = initGlobal;
    init_cnx_tester += "CLEAR\n";
    init_cnx_tester += "URL GOTO=http://whatsmyuseragent.org/\n";
    init_cnx_tester += "WAIT SECONDS=2\n";
    init_cnx_tester += "URL GOTO=https://accounts.google.com/signin/v2/identifier?service=mail\n";
    init_cnx_tester += "WAIT SECONDS=10\n";
    //-----------------------------------------------------------------------------------
    var no_connection = initGlobal;
    //no_connection += "SET !EXTRACT null\n";
    //no_connection += "ADD !EXTRACT \"CNX PROBLEM\"\n";
    //-----------------------------------------------------------------------------------
    var cant_access_recovery_link = initGlobal;
    //cant_access_recovery_link += "SET !EXTRACT {{line_content}}\n";
    //cant_access_recovery_link += "ADD !EXTRACT \"CNX PROBLEM (Change Recovery Step)\"\n";   P
    //-----------------------------------------------------------------------------------
    var cant_access_change_password_link = initGlobal;
    //cant_access_change_password_link += "SET !EXTRACT {{line_content}}\n";
    //cant_access_change_password_link += "ADD !EXTRACT \"CNX PROBLEM (Change Password Step)\"\n";
    //-----------------------------------------------------------------------------------
    var cant_change_recovery_email = initGlobal;
    //cant_change_recovery_email += "SET !EXTRACT {{line_content}}\n";
    //cant_change_recovery_email += "ADD !EXTRACT \"CNX PROBLEM (Change Revocery Step)\"\n";

    //-----------------------------------------------------------------------------------
    var cant_change_password = initGlobal;
    //cant_change_password += "SET !EXTRACT {{line_content}}\n";
    //cant_change_password += "ADD !EXTRACT \"CNX PROBLEM (Change Password Step)\"\n";
    //-----------------------------------------------------------------------------------

      Q var openParams = initGlobal;

    openParams += " URL GOTO=https://myaccount.google.com/language?utm_source=google-account&utm_medium=webhttps://myaccount.google.com/language?utm_source=google-account&utm_medium=webhttps://myaccount.google.com/language?utm_source=google-account&utm_medium=web \n";
    openParams += "WAIT SECONDS=2\n";
    openParams += " EVENT TYPE=CLICK XPATH=\"//button[contains(@class,'VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ')]\"\n";
    //openParams += " URL GOTO=https://myaccount.google.com/language?utm_source=google-account&utm_medium=webhttps://myaccount.google.com/language?utm_source=google-account&utm_medium=webhttps://myaccount.google.com/language?utm_source=google-account&utm_medium=web \n";
    //openParams += "EVENT TYPE=CLICK XPATH=\"//span[contains(@class,'RveJvd snByac')]\" BUTTON=0\n";//add new
    //openParams += "WAIT SECONDS=2\n";
    //openParams += "EVENT TYPE=CLICK XPATH=\"//span[@class='DPvwYc'][contains(.,'?')]\" BUTTON=0\n";//edit
    openParams += "WAIT SECON   RDS=2\n";
    openParams += "EVENT TYPE=CLICK XPATH=\"//span[@jsname='C60OMd'][contains(.,'English')]\" BUTTON=0\n";
    openParams += "WAIT SECONDS=2\n";
    //openParams += "EVENT TYPE=CLICK XPATH=\"(//div[@data-languagecode='en'])[2]\" BUTTON=0\n";
    openParams += "EVENT TYPE=CLICK XPATH=\"//div[@class='Ovehae'][contains(.,'United States')]\" BUTTON=0\n";
    openParams += "WAIT SECONDS=2\n";
    //openParams += "EVENT TYPE=CLICK XPATH=\"(//span[@class='VfPpkd-vQzf8d'])[1]\" BUTTON=0\n";
    openParams += "EVENT TYPE=CLICK XPATH=\"(//span[contains(@jsname,'V67aGc')])[5]\" BUTTON=0\n";

    openParams += "WAIT SECONDS=2\n";
    //openParams += " EVENT TYPE=CLICK XPATH=\"//button[contains(@class,'VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ')]\"\n";
    openParams += " EVENT TYPE=CLICK XPATH=\"//div[contains(@class,'VfPpkd-RLmnJb')]\"\n";
    //openParams += " URL GOTO=https://myaccount.google.com/language?utm_source=google-account&utm_medium=webhttps://myaccount.google.com/language?utm_source=google-a   Sccount&utm_medium=webhttps://myaccount.google.com/language?utm_source=google-account&utm_medium=web \n";
    //openParams += "EVENT TYPE=CLICK XPATH=\"//span[contains(@class,'RveJvd snByac')]\" BUTTON=0\n";//add new
    //openParams += "WAIT SECONDS=2\n";
    //openParams += "EVENT TYPE=CLICK XPATH=\"//span[@class='DPvwYc'][contains(.,'?')]\" BUTTON=0\n";//edit
    openParams += "WAIT SECONDS=2\n";
    openParams += "EVENT TYPE=CLICK XPATH=\"//span[@jsname='C60OMd'][contains(.,'English')]\" BUTTON=0\n";
    openParams += "WAIT SECONDS=2\n";
    //openParams += "EVENT TYPE=CLICK XPATH=\"(//div[@data-languagecode='en'])[2]\" BUTTON=0\n";
    openParams += "EVENT TYPE=CLICK XPATH=\"//div[@class='Ovehae'][contains(.,'United States')]\" BUTTON=0\n";
    openParams += "WAIT SECONDS=2\n";
    //openParams += "EVENT TYPE=CLICK XPATH=\"(//span[@class='VfPpkd-vQzf8d'])[1]\" BUTTON=0\n";
    openParams += "EVENT TYPE=CLICK XPATH=\"(//span[contains(@jsname,'V67aGc')])[5]\" BUTTON=0\n";
    openParams += "    WAIT SECONDS=5\n";

    //-----------------------------------------------------------------------------------


    iimPlay(init_cnx_tester);

    iimPlay(signInScenario);

    iimPlay(signInSetPassword);

    iimPlay(fillRecoveryScenario);

    if(iimPlay("CODE:SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=IMG ATTR=SRC:*ac/cb/cb_cb2_shield_empty_* CONTENT=EVENT:MOUSEOVER") === 1 )
    {
        iimPlay(acceptTerms);
    }

    iimPlay(openParams);

    //Check if the change password link is loaded
    iimPlay(openChangePassword);
    iimPlay(changePasswordSignOut);

    iimPlay(changeRecovPassSignOutScenariosINIT_link);

    //Check if the recovery link is loaded
    iimPlay(changeRecovPassSignOutScenariosINIT_pass);
    iimPlay(changeRecoveryOpenPassLink);
    //Check if the phone request is raised after entring the recovery pass
    //Check if the recovery interface is loaded
}

function getRandomDelay(min, max){
return (Math.random() * (max - min) + min).toFixed(1);
}
desktop    k �� k                                                                                             �& ?U��-GMAILCREATE BOX & TURN ON SMTPFNAME/LNAME/USER/PASS/RECOVERY/PHONEvar profile,macrolist;

var initGlobal = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal       += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 5 \n";
initGlobal   += "SET !TIMEOUT_PAGE 2 \n";
initGlobal   += "SET !WAITPAGECOMPLETE   Z�
 3�MGMAILTURN ON SMTP ACCESSUSER/PASSvar profile,macrolist;

var initGlobal = "CODE:";
initGlobal += "SET !ERRORIGNORE YES \n";
initGlobal += '{[AGENT]}\n';
initGlobal += "SET !TIMEOUT_STEP 5 \n";
initGlobal += "SET !TIMEOUT_PAGE 2 \n";
initGlobal += "SET !WAITPAGECOMPLETE YES\n";
   U��E
 _{��%GMAILCHANGE ALL (LANGUAGE, PASSWORD, RECOVERY)EMAIL/OLD_PASS/OLD_RECOVERY_EMAIL/NEW_PASS/NEW_RECOVERYvar boxes_number ;
boxes_number = 1;
if (boxes_number != null)
{
    var delay, delayBetweenActions, output=[];
    var unique_id=Math.floor(Math.ra   C   VinitGlobal += "{[PROXY_IP]} \n";
initGlobal += '{[PROXY_LOGIN]} \n'; 

//TURN ON SMTP//

macrolist  = initGlobal;
macrolist += "WAIT SECONDS=1 \n"; 
macrolist += "TAB T=1 \n";
macrolist += "TAB CLOSEALLOTHERS \n";
macrolist += "URL GOTO=https://myaccount.google.com/security?hl=en \n";
macrolist += "WAIT SECONDS=10 \n";  
macrolist += "SET !EXTRACT null \n";
macrolist += "SET !EXTRACT {{!URLCURRENT}} \n";
macrolist += "wait seconds=1 \n";
iimPlay(macrolist); 
var currurl =  iimGetLastExtract();         
if (currurl.includes("https://myaccount.google.com/"))
{
        macrolist  = initGlobal;
        macrolist += "TAG POS=1 TYPE=H3 ATTR=TXT:2-Step<SP>Verification \n";
        macrolist += "WAIT SECONDS=4 \n";  
        macrolist += "TAG POS=2 TYPE=SPAN ATTR=TXT:Get<SP>started \n";
        macrolist += "WAIT SECONDS=5 \n";  
        macrolist += "SET !EXTRACT null \n";
        macrolist += "TAG POS=1 TYPE=DIV ATTR=class:PrDSKc EXTRACT=TXT\n";
        iimPlay(macrolist);
        var    Wres18 = iimGetLastExtract();
        if (res18.includes("To continue, first verify it's you"))
        {
                macrolist  = initGlobal;
                macrolist += "WAIT SECONDS=1 \n"; 
                macrolist += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/signin/v2/challenge/password/empty ATTR=NAME:password CONTENT={[PASS]} \n";      
                macrolist += "WAIT SECONDS=1 \n";
                macrolist += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n";
                macrolist += "WAIT SECONDS=4 \n";
                macrolist += "TAG POS=1 TYPE=div ATTR=class:nUt1y EXTRACT=TXT\n";
                iimPlay(macrolist);

                var res19 = iimGetLastExtract();
                if (res19.includes("Let's set up your phone"))
                {
                        macrolist  = initGlobal;
                        macrolist += "WAIT SECONDS=1 \n"; 
                        macrolist += "TAG POS=1 TYPE=INPUT:TEL ATTR=* CONTENT={[PHONE]} \n";
                        macro   Xlist += "TAG POS=2 TYPE=SPAN ATTR=TXT:Next \n";
                        macrolist += "PAUSE \n";
                        iimPlay(macrolist);
                }
        }

        macrolist  = initGlobal;
        macrolist += "WAIT SECONDS=5 \n";
        macrolist += "TAG POS=2 TYPE=SPAN ATTR=TXT:Turn<SP>on \n";
        macrolist += "WAIT SECONDS=5 \n";
        macrolist += "TAG POS=3 TYPE=SPAN ATTR=TXT:? \n";
        macrolist += "WAIT SECONDS=3 \n";
        macrolist += "TAG POS=1 TYPE=H3 ATTR=TXT:App<SP>passwords \n";
        macrolist += "WAIT SECONDS=5 \n";  
        macrolist += "SET !EXTRACT null \n";
        macrolist += "TAG POS=1 TYPE=DIV ATTR=class:PrDSKc EXTRACT=TXT\n";
        iimPlay(macrolist);

        var res20 = iimGetLastExtract();
        if (res20.includes("To continue, first verify it's you"))
        {
                macrolist  = initGlobal;
                macrolist += "WAIT SECONDS=1 \n"; 
                macrolist += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTIO   YN:/signin/v2/challenge/password/empty ATTR=NAME:password CONTENT={[PASS]} \n";      
                macrolist += "WAIT SECONDS=1 \n";
                macrolist += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n";
                macrolist += "WAIT SECONDS=5 \n";
                iimPlay(macrolist);
        }

        macrolist  = initGlobal;
        macrolist += "WAIT SECONDS=1 \n"; 
        macrolist += "TAG POS=1 TYPE=DIV ATTR=TXT:Select<SP>app \n";
        macrolist += "WAIT SECONDS=2 \n";
        macrolist += "TAG POS=2 TYPE=DIV ATTR=TXT:Mail \n";
        macrolist += "WAIT SECONDS=2 \n";
        macrolist += "TAG POS=1 TYPE=DIV ATTR=TXT:Select<SP>device \n";
        macrolist += "WAIT SECONDS=2 \n";
        macrolist += "TAG POS=2 TYPE=SPAN ATTR=TXT:Windows<SP>Computer \n";
        macrolist += "WAIT SECONDS=2 \n";
        macrolist += "TAG POS=2 TYPE=SPAN ATTR=TXT:Generate \n";
        macrolist += "WAIT SECONDS=8 \n";
        macrolist += "SET !EXTRACT null \n";
        macrolist += "TA    G POS=1 TYPE=SPAN ATTR=CLASS:CP2bwb EXTRACT=TXT \n";
        iimPlay(macrolist);

        var g_smtp = iimGetLastExtract().slice(-16); 

        var kokot = initGlobal;
        kokot    += "SET !VAR2 \"" + g_smtp + "\"  \n";
        kokot    += "SET !EXTRACT null \n";
        kokot    += "ADD !EXTRACT smtp.gmail.com,587,{[USER]}@gmail.com,{{!VAR2}},500,{[USER]}@gmail.com  \n";
        kokot    += "SAVEAS TYPE=EXTRACT FOLDER=C:\\{[PC_USER]}\\Documents\\iMacros\\Datasources FILE=smtp_success_gmail.txt  \n";
        kokot    += "WAIT SECONDS=1 \n";
        kokot    += "TAB CLOSE  \n";
        iimPlay(kokot); 
}
else
{
        var kokot = initGlobal;
        kokot    += "SET !EXTRACT null \n";
        kokot    += "ADD !EXTRACT {[CURRENT_PROFILE]},{[USER]},{[PASS]}  \n";
        kokot    += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=turn_on_smtp_error_gmail.txt  \n";
        kokot    += "WAIT SECONDS=1 \n";
        kokot    += "TAB CLOSE  \n";
        iimPlay(kokot); 
}desktop   [ YES\n";
initGlobal       += "{[PROXY_IP]} \n";
initGlobal       += '{[PROXY_LOGIN]} \n'; 

macrolist  = initGlobal;
macrolist += "TAB T=1 \n";
macrolist += "TAB CLOSEALLOTHERS \n";
macrolist += "CLEAR \n";
macrolist += "WAIT SECONDS = 1 \n";
macrolist += "URL GOTO=https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp \n";
macrolist += "WAIT SECONDS = 8 \n";
macrolist += 'TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:firstName CONTENT="{[FNAME]}" \n';
macrolist += "WAIT SECONDS = 2 \n";
macrolist += 'TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:lastName CONTENT="{[LNAME]}" \n';
macrolist += "WAIT SECONDS = 3 \n";
macrolist += 'TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=ID:username CONTENT="{[USER]}" \n';
macrolist += "WAIT SECONDS = 1 \n";
macrolist += 'TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:Passwd CONTENT="{[PASS]}" \n';
macrolist += "WAIT SECONDS = 2 \n";
macrolist += 'TAG POS=1 TYPE=INPU   \T:PASSWORD FORM=NAME:NoFormName ATTR=NAME:ConfirmPasswd CONTENT="{[PASS]}" \n';
macrolist += "WAIT SECONDS = 3 \n";
macrolist += "TAG POS=2 TYPE=DIV ATTR=class:VfPpkd-Jh9lGc\n";
macrolist += "WAIT SECONDS = 4 \n";
macrolist += "SET !EXTRACT null \n";
macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Verify<SP>your<SP>phone<SP>number EXTRACT=TXT \n";
iimPlay(macrolist);
var res = iimGetLastExtract();
if (res.includes("Verify your phone number"))
{
  macrolist    = initGlobal;
  macrolist += "WAIT SECONDS = 3 \n";
  macrolist += 'TAG POS=1 TYPE=INPUT:TEL FORM=NAME:NoFormName ATTR=ID:phoneNumberId CONTENT="{[PHONE]}" \n';
  iimPlay(macrolist);
}

macrolist = initGlobal; 
macrolist += "WAIT SECONDS = 1 \n";
macrolist += "PAUSE \n";
iimPlay(macrolist);

macrolist = initGlobal; 
macrolist += "WAIT SECONDS = 1 \n";
macrolist += "SET !EXTRACT null \n";
macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:*<SP>welcome<SP>to<SP>Google EXTRACT=TXT \n";
macrolist += "WAIT SECONDS = 1 \n";
iimPlay(macrolist);   ]
var res = iimGetLastExtract();
if (res.includes(" welcome to Google"))
{
        macrolist = initGlobal; 
        macrolist += "WAIT SECONDS = 2 \n";
        macrolist += 'TAG POS=1 TYPE=INPUT:TEL FORM=NAME:NoFormName ATTR=ID:phoneNumberId CONTENT="{[PHONE]}" \n';
        macrolist += "WAIT SECONDS = 3 \n";
        macrolist += 'TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=NAME:recoveryEmail CONTENT="{[RECOVERY]}" \n';
        macrolist += "WAIT SECONDS = 2 \n";
        macrolist +=  'SET !VAR1 EVAL("var randomNumber=Math.floor(Math.random()*30 + 1); randomNumber;") \n';
        macrolist +=  'TAG POS=1 TYPE=INPUT ATTR=ID:day CONTENT={{!VAR1}}  \n';
        macrolist += "WAIT SECONDS = 1 \n";
        macrolist +=  'SET !VAR2 EVAL("var randomNumber=Math.floor(Math.random()*15 + 1985); randomNumber;") \n';
        macrolist +=  'TAG POS=1 TYPE=INPUT ATTR=ID:year CONTENT={{!VAR2}} \n';
        macrolist += "WAIT SECONDS = 2 \n";
        macrolist +=  'SET !VAR3 EVAL("var randomNumber   ^=Math.floor(Math.random()*11 + 1); randomNumber;") \n';
        macrolist +=  'TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:month CONTENT=%{{!VAR3}} \n';
        macrolist += "WAIT SECONDS = 1 \n";
        macrolist +=  'SET !VAR4 EVAL("var randomNumber=Math.floor(Math.random()*3 + 1); randomNumber;") \n';
        macrolist +=  'TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:gender CONTENT=%{{!VAR4}} \n';
        macrolist += "WAIT SECONDS = 3 \n";
        macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Next \n";
        macrolist += "WAIT SECONDS = 4 \n";
        macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Skip \n";
        macrolist += "WAIT SECONDS = 3 \n";
        macrolist += "TAG POS=1 TYPE=DIV ATTR=ID:selectionc11 \n";
        macrolist += "WAIT SECONDS = 5 \n";
        macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Next \n";
        macrolist += "WAIT SECONDS = 3 \n";
        macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Confirm \n";
        macrolist += "WAIT SECONDS = 4 \n";
          _ macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:I<SP>agree \n";
        macrolist += "WAIT SECONDS = 5 \n";
        macrolist += "URL GOTO=https://www.google.com \n";
        macrolist += "WAIT SECONDS = 4 \n";
        macrolist += "TAG POS=1 TYPE=a ATTR=CLASS:gb_f&&TXT:Gmail \n";
        macrolist += "WAIT SECONDS = 9 \n";
        macrolist += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue<SP>with<SP>smart<SP>features \n";
        macrolist += "WAIT SECONDS = 1 \n";
        macrolist += "TAG POS=1 TYPE=BUTTON ATTR=NAME:data_consent_dialog_next \n";
        macrolist += "WAIT SECONDS = 1 \n";
        macrolist += "TAG POS=1 TYPE=DIV ATTR=TXT:Personalize<SP>other<SP>Google<SP>products* \n";
        macrolist += "WAIT SECONDS = 1 \n";
        macrolist += "TAG POS=1 TYPE=BUTTON ATTR=NAME:data_consent_dialog_done \n";
        macrolist += "WAIT SECONDS = 2 \n";
        macrolist += "TAG POS=1 TYPE=BUTTON ATTR=CLASS:J-at1-auR&&NAME:r \n";
        macrolist += "WAIT SECONDS = 5 \n";
        macrolist += "SE   `T !EXTRACT null \n";
        macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Something<SP>went<SP>wrong EXTRACT=TXT \n";
        iimPlay(macrolist);

        var res8 = iimGetLastExtract();
        if (res8.includes(" Something went wrong"))
        {
                macrolist = initGlobal; 
                macrolist += "TAB Close \n";
                iimPlay(macrolist);
        }
  
        macrolist = initGlobal; 
        macrolist += "WAIT SECONDS = 2 \n";
        macrolist += "ADD !EXTRACT {[USER]},{[PASS]},{[RECOVERY]},{[FNAME]},{[LNAME]},{[PHONE]}\n";
        macrolist += "SAVEAS TYPE=EXTRACT FOLDER=C:\\{[PC_USER]}\\Documents\\iMacros\\Datasources FILE=created_account_gmail.txt \n";
        macrolist += "WAIT SECONDS = 1 \n";
        iimPlay(macrolist);
        
        //TURN ON SMTP//
        macrolist  = initGlobal;
        macrolist += "WAIT SECONDS=1 \n"; 
        macrolist += "URL GOTO=https://myaccount.google.com/security?hl=en \n";
        macrolist += "WAIT SECONDS=8 \n";    a 
        macrolist += "TAG POS=1 TYPE=H3 ATTR=TXT:2-Step<SP>Verification \n";
        macrolist += "WAIT SECONDS=4 \n";  
        macrolist += "TAG POS=2 TYPE=SPAN ATTR=TXT:Get<SP>started \n";
        macrolist += "WAIT SECONDS=5 \n";  
        macrolist += "SET !EXTRACT null \n";
        macrolist += "TAG POS=1 TYPE=DIV ATTR=class:PrDSKc EXTRACT=TXT\n";
        iimPlay(macrolist);
        var res18 = iimGetLastExtract();
        if (res18.includes("To continue, first verify it's you"))
        {
                macrolist  = initGlobal;
                macrolist += "WAIT SECONDS=1 \n"; 
                macrolist += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/signin/v2/challenge/password/empty ATTR=NAME:password CONTENT={[PASS]} \n";  
                macrolist += "WAIT SECONDS=1 \n";
                macrolist += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n";
                macrolist += "WAIT SECONDS=4 \n";
                macrolist += "TAG POS=1 TYPE=div ATTR=class:nUt1y EXTRACT=TXT\n";
      b             iimPlay(macrolist);
                var res19 = iimGetLastExtract();
                if (res19.includes("Let's set up your phone"))
                {
                        macrolist  = initGlobal;
                        macrolist += "WAIT SECONDS=1 \n"; 
                        macrolist += "TAG POS=1 TYPE=INPUT:TEL ATTR=* CONTENT={[PHONE]} \n";
                        macrolist += "TAG POS=2 TYPE=SPAN ATTR=TXT:Next \n";
                        macrolist += "PAUSE \n";
                        iimPlay(macrolist);
                }
        }

        macrolist  = initGlobal;
        macrolist += "WAIT SECONDS=5 \n";
        macrolist += "TAG POS=2 TYPE=SPAN ATTR=TXT:Turn<SP>on \n";
        macrolist += "WAIT SECONDS=5 \n";
        macrolist += "TAG POS=3 TYPE=SPAN ATTR=TXT:? \n";
        macrolist += "WAIT SECONDS=3 \n";
        macrolist += "TAG POS=1 TYPE=H3 ATTR=TXT:App<SP>passwords \n";
        macrolist += "WAIT SECONDS=5 \n";  
        macrolist += "SET !EXTRACT nu   cll \n";
        macrolist += "TAG POS=1 TYPE=DIV ATTR=class:PrDSKc EXTRACT=TXT\n";
        iimPlay(macrolist);

        var res20 = iimGetLastExtract();
        if (res20.includes("To continue, first verify it's you"))
        {
                macrolist  = initGlobal;
                macrolist += "WAIT SECONDS=1 \n"; 
                macrolist += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/signin/v2/challenge/password/empty ATTR=NAME:password CONTENT={[PASS]} \n";  
                macrolist += "WAIT SECONDS=1 \n";
                macrolist += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n";
                macrolist += "WAIT SECONDS=5 \n";
                iimPlay(macrolist);
        }

        macrolist  = initGlobal;
        macrolist += "WAIT SECONDS=1 \n"; 
        macrolist += "TAG POS=1 TYPE=DIV ATTR=TXT:Select<SP>app \n";
        macrolist += "WAIT SECONDS=2 \n";
        macrolist += "TAG POS=2 TYPE=DIV ATTR=TXT:Mail \n";
        macrolist += "WAIT SECONDS=2 \n";
        macrolist +    = "TAG POS=1 TYPE=DIV ATTR=TXT:Select<SP>device \n";
        macrolist += "WAIT SECONDS=2 \n";
        macrolist += "TAG POS=2 TYPE=SPAN ATTR=TXT:Windows<SP>Computer \n";
        macrolist += "WAIT SECONDS=2 \n";
        macrolist += "TAG POS=2 TYPE=SPAN ATTR=TXT:Generate \n";
        macrolist += "WAIT SECONDS=8 \n";
        macrolist += "SET !EXTRACT null \n";
        macrolist += "TAG POS=1 TYPE=SPAN ATTR=CLASS:CP2bwb EXTRACT=TXT \n";
        iimPlay(macrolist);

        var g_smtp = iimGetLastExtract().slice(-16); 

        var kokot = initGlobal;
        kokot += "SET !VAR2 \"" + g_smtp + "\"  \n";
        kokot += "SET !EXTRACT null \n";
        kokot += "ADD !EXTRACT smtp.gmail.com,587,{[USER]}@gmail.com,{{!VAR2}},500,{[USER]}@gmail.com  \n";
        kokot += "SAVEAS TYPE=EXTRACT FOLDER=C:\\{[PC_USER]}\\Documents\\iMacros\\Datasources FILE=smtp_success_gmail.txt  \n";
        iimPlay(kokot); 
}

macrolist = initGlobal; 
macrolist += "TAB Close \n";
iimPlay(macrolist);desktop   e  = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 5 \n";
initGlobal   += "SET !TIMEOUT_PAGE 2 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "CLEAR \n";

openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";
openParams += "SET !TIMEOUT_PAGE 10 \n";
openParams += "SET !TIMEOUT_STEP 2 \n";
openParams += "URL GOTO=https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1558390193&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7e93273f-0908-9ca4-c99f-f5c7f8d0e5ce&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015 \n";
openParams += "WAIT SECONDS=8 \n";  
openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"#i0116\" CHARS=\"{[EMAIL]}\"\n"; 
openParams += "WAIT SECONDS=1\n";
openParams += "E   fVENT TYPE=CLICK SELECTOR=\"#idSIButton9\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"#i0118\" CHARS=\"{[PASSWORD]}\"\n"; 
openParams += "WAIT SECONDS=1.5\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#idSIButton9\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=4\n";
iimPlay(openParams);

openParams  = initGlobal;
openParams += "wait seconds=1 \n";    
openParams += "SET !EXTRACT null \n";
openParams += "TAG POS=1 TYPE=DIV ATTR=ID:iSelectProofTitle EXTRACT=TXT \n";
openParams += "wait seconds=0.5 \n";
iimPlay(openParams);

var res3 = iimGetLastExtract();
if (res3.includes("Help us protect your account"))
{
  //mailnesia.com
  openParams  = initGlobal;
  openParams += "SET !EXTRACT null \n";
  openParams += "TAG POS=1 TYPE=SPAN ATTR=CLASS:dirltr EXTRACT=TXT\n";
  iimPlay(openParams);
  var res4 = iimGetLastExtract();
  if (res4.includes("mailnesia.com"))
  {
    openParams  = initGlobal;
    openParams += "TAG POS=1 TYPE=SPAN ATTR=C   gLASS:dirltr\n";
    openParams += "wait seconds=1 \n";
    openParams += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:pageDialogForm_0 ATTR=ID:iProofEmail CONTENT="+"{[EMAIL]}".split("@",1)+" \n";
    openParams += "wait seconds=1 \n";
    openParams += "TAG POS=1 TYPE=INPUT ATTR=ID:iSelectProofAction \n";
    openParams += "wait seconds=6 \n";
    iimPlay(openParams);
  
    openParams  = initGlobal;
    openParams += "TAB OPEN \n";
    openParams += "TAB T=2 \n";
    openParams += "URL GOTO=http://mailnesia.com/mailbox/"+"{[EMAIL]}".split("@",1)+" \n";
    openParams += "wait seconds=3 \n";
    openParams += "TAG POS=1 TYPE=A ATTR=TXT:"+"{[EMAIL]}".split("@",1)+"@mailnesia.com \n";
    openParams += "wait seconds=1 \n";
    openParams += "TAB T=2 \n";
    openParams += "wait seconds=2 \n";
    openParams += "TAG POS=1 TYPE=SPAN ATTR=STYLE:font-family* EXTRACT=TXT \n";
    openParams += "wait seconds=1 \n";
    iimPlay(openParams);
    var res7 = iimGetLastExtract();
    
    openParams  = i   hnitGlobal;
    if (res7 == null)
    {
      openParams += "PAUSE \n";
    }
    else
    {
      openParams += "TAB T=0 \n";
      openParams += "TAB CLOSEALLOTHERS \n";
      openParams += "wait seconds=1 \n";
      openParams += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:pageDialogForm_1 ATTR=ID:iOttText CONTENT=\""+res7+"\" \n";
      openParams += "wait seconds=1 \n";
      openParams += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:pageDialogForm_1 ATTR=ID:iVerifyCodeAction\n";
      openParams += "wait seconds=3 \n";
    }
    iimPlay(openParams);
  }
}

openParams = initGlobal;
openParams += "EVENT TYPE=CLICK SELECTOR=\"#iLooksGood\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#iShowSkip\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#KmsiCheckboxField\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=1\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#idSIButton9\" BUTTON=0\n"; 
openParams += "WAIT SECON    DS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#iCancel\" BUTTON=0\n";
openParams += "WAIT SECONDS=2\n";
openParams += "URL GOTO =https://outlook.live.com/mail/0/ \n";
openParams += "WAIT SECONDS=20\n";

var macroTest = initGlobal;
macroTest +="SET !EXTRACT null\n";
macroTest +="SET !EXTRACT {{!URLCURRENT}}\n";
macroTest +="wait seconds=1\n";

var final=initGlobal;
final += "TAB CLOSE\n";

var NotFound=initGlobal;
NotFound += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]}{[PROXY]}\n";
NotFound += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]}  FILE=open_error_hotmail.txt\n";

iimPlay(openParams);
iimPlay(macroTest);
var currurl=iimGetLastExtract();
if (!currurl.includes("https://outlook.live.com/mail/0/"))
{
        iimPlay(openParams);
        iimPlay(macroTest);
        var currurl2=iimGetLastExtract();
        if (!currurl2.includes("https://outlook.live.com/mail/0/"))
        {
            iimPlay(NotFound);
        }
}

iimPlay(final);desktop             l �h?l                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            �0
 A�HOTMAILCHANGE LANGUAGE && SETTINGvar openParams, result, agentproxy, agentproxy2;
agentproxy   = "CODE:SET !ERRORIGNORE YES \n";
agentproxy  += '{[AGENT]} \n';
agentproxy  += "{[PROXY_IP]} \n   j'	 )HOTMAILREPORTING SPAMdesktop(	 +HOTMAILREPORTING INBOXdesktop�I
 !M�HOTMAILOPEN SEEDSEMAIL/PASSWORD/IP:PORT:USER:PASSvar initGlobal,openParams;


initGlobal     d   k";
agentproxy  += '{[PROXY_LOGIN]} \n';
agentproxy  += "SET !TIMEOUT_PAGE 10 \n";
agentproxy  += "SET !TIMEOUT_STEP 2 \n";

agentproxy2  = "CODE:";
agentproxy2 += '{[AGENT]} \n';
agentproxy2 += "{[PROXY_IP]} \n";
agentproxy2 += '{[PROXY_LOGIN]} \n';
agentproxy2 += "SET !TIMEOUT_PAGE 10 \n";
agentproxy2 += "SET !TIMEOUT_STEP 2 \n";

openParams   = agentproxy;
openParams  += "TAB OPEN \n";
openParams  += "TAB T=2\n";
openParams  += "TAB CLOSEALLOTHERS\n";
openParams  += "URL GOTO=https://outlook.live.com/mail/0/options/general/timeAndLanguage \n";
openParams  += "WAIT SECONDS=20 \n";  
iimPlay(openParams);

result = null;  
openParams  = agentproxy2;  
openParams += "TAG XPATH= (//div[@role='button'])[1] \n"; 
result = iimPlay(openParams);  

if (result > 0)  
{  
    openParams  = agentproxy;
    openParams += "TAG XPATH=\"(//span[contains(@class,'ms-Dropdown-title')])[1]\" \n";
    openParams += "wait seconds=2 \n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:English<SP   l>(United<SP>States) \n";
    openParams += "wait seconds=3 \n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-is-focusable:true&&CLASS:ms-Button<sp>ms-Button--primary<sp>* \n";
    openParams += "wait seconds=3 \n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-is-focusable:true&&CLASS:ms-Button<sp>ms-Button--primary<sp>* \n";
    openParams += "wait seconds=3 \n";
    openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
    openParams += "WAIT SECONDS=3\n";
    iimPlay(openParams);

    openParams  = agentproxy;
    openParams += "TAB OPEN \n";
    openParams += "TAB T=2\n";
    openParams += "TAB CLOSEALLOTHERS\n";
    openParams += "SET !WAITPAGECOMPLETE YES\n";
    openParams += "URL GOTO=https://outlook.live.com/mail/0/options/mail/layout \n";
    openParams += "WAIT SECONDS=18\n";
    iimPlay(openParams);

    openParams = agentproxy;
    openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Don't<sp>sort<sp>my<sp>messages  \n";
    openParams += "WAI   mT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-is-focusable:true&&CLASS:ms-Button<sp>ms-Button--primary<sp>* \n";

    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Medium  \n";
    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-is-focusable:true&&CLASS:ms-Button<sp>ms-Button--primary<sp>* \n";

    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Show<SP>email<SP>as<SP>individual<SP>messages  \n";
    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-is-focusable:true&&CLASS:ms-Button<sp>ms-Button--primary<sp>* \n";

    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Show<sp>sender<sp>images  \n";
    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-is-focusable:true&&CLASS:ms-Button<sp>ms-Button--primary<sp>* \n";

    openParams += "WAIT SECO   nNDS=0.5\n";
    openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Hide<SP>reading<SP>pane \n";
    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-is-focusable:true&&CLASS:ms-Button<sp>ms-Button--primary<sp>* \n";

    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Return<SP>to<SP>the<SP>message<SP>list \n";
    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-is-focusable:true&&CLASS:ms-Button<sp>ms-Button--primary<sp>* \n";

    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Let<SP>me<SP>select<SP>which<SP>message<SP>to<SP>read<SP>fir* \n";
    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-is-focusable:true&&CLASS:ms-Button<sp>ms-Button--primary<sp>* \n";

    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Sender<sp>name<sp>first \n";
    openParams += "WAIT SECONDS=0   o.5\n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-is-focusable:true&&CLASS:ms-Button<sp>ms-Button--primary<sp>* \n";

    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Show<sp>preview<sp>text \n";
    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-is-focusable:true&&CLASS:ms-Button<sp>ms-Button--primary<sp>* \n";

    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Show<sp>attachments<sp>in<sp>message<sp>list \n";
    openParams += "WAIT SECONDS=0.5\n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-is-focusable:true&&CLASS:ms-Button<sp>ms-Button--primary<sp>* \n";

    openParams += "WAIT SECONDS=1\n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:View<SP>quick<SP>settings\n";
    openParams += "WAIT SECONDS=6\n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:Dark<sp>mode&&aria-checked:false\n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-lab   pel:options-quick-darkMode&&aria-checked:false\n";
    openParams += "WAIT SECONDS=3\n";
    iimPlay(openParams);

    openParams  = agentproxy;
    openParams += "URL GOTO=https://outlook.live.com/mail/0/options/mail/surfaceActions\n";
    openParams += "WAIT SECONDS=20\n";
    iimPlay(openParams);

    result = null;  
    openParams  = agentproxy2;  
    openParams += "TAG POS=1 TYPE=LABEL ATTR=TXT:Forward<SP>as<SP>attachment \n"; 
    result = iimPlay(openParams);  

    openParams  = agentproxy;

    openParams += "TAG POS=7 TYPE=INPUT:CHECKBOX ATTR=* CONTENT=YES\n"; //REPLY
    openParams += "WAIT SECONDS=0.5\n";

    openParams += "TAG POS=8 TYPE=INPUT:CHECKBOX ATTR=* CONTENT=NO\n"; //REPLY ALL
    openParams += "WAIT SECONDS=0.5\n";

    openParams += "TAG POS=9 TYPE=INPUT:CHECKBOX ATTR=* CONTENT=YES\n"; //FORWARD
    openParams += "WAIT SECONDS=0.5\n";

    openParams += "WAIT SECONDS=1\n";
    
    if (result > 0)  
    {
        openParams += "TAG POS=16 TYPE=INPUT:C    HECKBOX ATTR=* CONTENT=YES\n"; //NEVER BLOCK SENDER
        openParams += "WAIT SECONDS=0.5\n";
    }
    else
    {
        openParams += "TAG POS=14 TYPE=INPUT:CHECKBOX ATTR=* CONTENT=YES\n"; //NEVER BLOCK SENDER
        openParams += "WAIT SECONDS=0.5\n";
    }

    openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-is-focusable:true&&CLASS:ms-Button<sp>ms-Button--primary<sp>*\n";
    openParams += "WAIT SECONDS=3\n";

    openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
    openParams += "WAIT SECONDS=3\n";
    openParams += "TAB CLOSE \n";
    iimPlay(openParams);
}  
else  
{  
    openParams = agentproxy;
    openParams += "SET !TIMEOUT_PAGE 10\n";
    openParams += "SET !TIMEOUT_STEP 2\n";
    openParams += "ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]}  \n";
    openParams += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=changelanguagesetting_error_hotmail.txt\n";
    openParams += "TAB CLOSE\n"
    iimPlay(openParams);  
} desktop   rs  = agentproxy;
openParams += "SET !WAITPAGECOMPLETE YES\n";
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "SET !TIMEOUT_PAGE 10 \n";
openParams += "SET !TIMEOUT_STEP 2 \n";
openParams += "URL GOTO=https://signup.live.com/signup?mkt=en-en&lic=1&uaid=631d9160512e44d998aaca1b49cc9829 \n";
openParams += "WAIT SECONDS=1 \n";  
openParams += "TAB CLOSEALLOTHERS\n";
openParams += "WAIT SECONDS=10 \n";  
openParams += "TAG POS=1 TYPE=A ATTR=ID:liveSwitch \n";
openParams += "TAG POS=1 TYPE=SELECT FORM=ID:CredentialsForm ATTR=ID:LiveDomainBoxList CONTENT=%{[ISP]} \n";
openParams += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:CredentialsForm ATTR=ID:MemberName CONTENT={[USER]} \n";
openParams += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:CredentialsForm ATTR=ID:iSignupAction \n";
openParams += "SET !ENCRYPTION NO \n";
openParams += "WAIT SECONDS=2 \n";
openParams += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:PasswordForm ATTR=ID:PasswordInput CONTENT={[PASS]} \n";
openParams += "WAIT SECONDS=   s3 \n";
openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:I<SP>would<SP>like<SP>information,<SP>tips,<SP>and<SP>offers* \n";
openParams += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:PasswordForm ATTR=ID:iOptinEmail CONTENT=NO \n";
openParams += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:PasswordForm ATTR=ID:iSignupAction \n";
openParams += "wait seconds = 3 \n";
openParams += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:ProfileAccrualForm ATTR=ID:FirstName CONTENT={[FNAME]} \n";
openParams += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:ProfileAccrualForm ATTR=ID:LastName CONTENT={[LNAME]} \n";
openParams += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:ProfileAccrualForm ATTR=ID:iSignupAction \n";
openParams += "wait seconds = 2 \n";
openParams += "TAG POS=1 TYPE=SELECT FORM=ID:BirthDateCountryAccrualForm ATTR=ID:Country CONTENT=%{[COUNTRY]} \n";
openParams += "TAG POS=1 TYPE=SELECT FORM=ID:BirthDateCountryAccrualForm ATTR=ID:BirthMonth CONTENT=%{[BIRTHMONTH]} \n";
openParams += "TAG POS=1 TYPE=SELECT FORM=ID:BirthDateCountryAccrualForm A    TTR=ID:BirthDay CONTENT=%{[BIRTHDAY]} \n";
openParams += "TAG POS=1 TYPE=SELECT FORM=ID:BirthDateCountryAccrualForm ATTR=ID:BirthYear CONTENT=%{[BIRTHYEAR]} \n";
openParams += "TAG POS=1 TYPE=INPUT:NUMBER FORM=ID:BirthDateCountryAccrualForm ATTR=ID:BirthYear CONTENT={[BIRTHYEAR]} \n";
openParams += "wait seconds = 3 \n";
openParams += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:BirthDateCountryAccrualForm ATTR=ID:iSignupAction \n";
openParams += "wait seconds = 4 \n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#KmsiCheckboxField\" BUTTON=0 \n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#idSIButton9\" BUTTON=0 \n";
openParams += "wait seconds = 4 \n";
openParams += "SET !EXTRACT NULL \n";
openParams += "ADD !EXTRACT {[USER]}@{[ISP]},{[PASS]},{[FNAME]},{[LNAME]},{[BIRTHDAY]}/{[BIRTHMONTH]}/{[BIRTHYEAR]},{[COUNTRY]}\n";
openParams += "SAVEAS TYPE=EXTRACT FOLDER=C:\\{[PC_USER]}\\Documents\\iMacros\\Datasources FILE=created_hotmail.txt \n";
openParams += "WAIT SECONDS=5\n";
iimPlay(openParams);desktop    �  �                                                                                                                           �h !��HOTMAILCREATE BOXUSER/ISP/PASS/FNAME/LNAME/BIRTHDAY/BIRTHMONTH/BIRTHYEAR/COUNTRYvar openParams, agentproxy, agentproxy2;

agentproxy    = "CODE:";
agentproxy   += "SET !ERRORIGNORE YES \n";
agentproxy   += '{[AGENT]}\n';
agentproxy   += "SET !TIMEOUT_STEP 5 \n";
agentproxy   += "SET !TIMEOUT_PAGE 2 \n";
agentproxy   += "SET !WAITPAGECOMPLETE YES\n";
agentproxy   += "{[PROXY_IP]} \n";
agentproxy   += '{[PROXY_LOGIN]} \n'; 
agentproxy   += "WAIT SECONDS=1 \n"; 

agentproxy2   = "CODE:";
agentproxy2  += '{[AGENT]}\n';
agentproxy2  += "SET !TIMEOUT_STEP 5 \n";
agentproxy2  += "SET !TIMEOUT_PAGE 2 \n";
agentproxy2  += "SET !WAITPAGECOMPLETE YES\n";
agentproxy2  += "{[PROXY_IP]} \n";
agentproxy2  += '{[PROXY_LOGIN]} \n'; 
agentproxy2  += "WAIT SECONDS=1 \n"; 

openParams  = agentproxy;
openParams += "CLEAR \n";
iimPlay(openParams);

openParam   q   vt seconds=1\n";
iimPlay(macroTest);

var currurl=iimGetLastExtract();
if (currurl == "https://support.microsoft.com/en-us/supportrequestform/8ad563e3-288e-2a61-8122-3ba03d6b8d75")
{
    openParams  = agentproxy;
    openParams += "SET !TIMEOUT_PAGE 10 \n";
    openParams += "SET !TIMEOUT_STEP 2 \n";
    openParams += "SET !VAR1 EVAL(\"randomWords(1, ['Bailee','Bjorn','Fruit','Alisson','Faith','Koda','Jaidyn','Raymond','Darrell','Abba','Jasmin','Junior','Elianna','Adonica','Seamus','Journey','Khari','Alonso','Efrain','Nathaniel','Karlie','Alia','Jocelynn','Natalia','Kashton','Callie','Sherlyn','Darius','Ryann','Dixie','Kenneth','Salvador','Lawrence','Nixon','Damien','Aidric','Ishaan','Swedish','Kamden','Kian','Blake','Tia','Cameron','Tess','Isaac','Clay','Hadassah','Nola','Brynn','Sebastian','Adita','Kaiya','Saanvi','Acotas','Aimi','Harlan','Braydon','Julius','Gannon','Hattie','Aldo','Jamir','Eliza','Leilani','Zain','Pearl','Justin','Aliana','Walker','Kyle','Rudy','Emery','Liana','Noah','Alaric','   wDarryl','Kalel','Anson','Skylar','Zachery','Nicholas','American','Regina','Yandel','Daniella','Malakai','Carlos','Jean','Jocelyn','Marcos','Eason','Adyson','Ellen','Asa','Ahava','Louie','Aubrie','Frankie','Kelsey','Kira','Amiya','Landry','Alfredo','Jaxxon','Magnus','Vanessa','Maximiliano','Kara','Braylen','Aryan','Nolan','Ashton','Shannon','Flynn','Konner','Ashlyn','Ayan','Lorelai','Elise','Allyson','Estrella','Rashad','Peyton','Tiffany','Irish','Alondra','Addisyn','Annabell','Luz','Layne','Tyree','Gloria','Janae','Aislin','Cason','Lillie','Aaden','Ainslie','Virginia','Valentin','Kolton','Audrey','Jaliyah','Bird','Emilee','Jett','Legend','Evangeline','Anastasia','Anakin','Finnegan','Giovanny','Waylon','Evelyn','Giada','Antoine','Alaya','Angelique','Mollie','Adem','Alison','Jaron','Bowen','Juelz','Agustin','Chris','Cristopher','Milan','Akiva','Admon','Miya','Valentino','Pierce','Gianna','Libby','Casen','Hana','Vincent','Destinee','Alayah','Alvaro','Stetson','Sarahi','Reese','Ella','Tatum','Carissa','Roderi   xck','Sasha','Araceli','Remy','Nash','Ricky','Aidan','Leona','Kathleen','Avery','Jenny','Lyle','Adlai','Sylvia','Rosa','Aeron','Elliana','Yoselin','Lorelei','Acton','Ezra','Kieran','Wells','Maurice','Francis','Kimora','Josie','Taliyah','Milo','Pablo','Omar','Kymani','Damian','Ayla','Kourtney','Cheyanne','Aglaia','Kai','Dwayne','Callan','Solomon','Caroline','Theodore','Ridge','Kareem','Jairo','Brodie','Greek','Leah','Semaj','Wilder','Braylee','Tegan','Juniper','Dominic','Amelie','Alana','Jaydin','Alexandra','Thaddeus','Julie','Cannon','Kaiden','Bridget','Jaylene','Phillip','Brayden','Declan','Pierre','Jace','Chase','Alonzo','Makai','Sienna','Sutton','Aggie','Everett','Leland','Davion','Arabella','Carl','Elsa','Livia','Lennon','Kaelynn','Nancy','Forrest','Alagan','Kiana','Aderyn','Russian','Rihanna','Stephen','Adelaide','Maddison','Lilly','Christian','Mikayla','Rogelio','Sandra','Samara','Major','Mustafa','Gracelynn','Lilian','Harper','Vivaan','Grace','Reed','Otis','Maritza','Charlee','Yisroel','Akira','Noe'   y,'Emilie','Kenna','Tyrone','Aria','Mckenna','Jenna','Hayden','Addilyn','Aaron','Nevaeh','Leyla','Benson','Mariah','Bria','Ally','Zion','Dulce','Adish','Laylah','Brielle','Dominique','Maria','Ronin','Hallie','Deborah','Asher','Kristian','Akia','Dante','Reece','Dexter','Erik','Malachi','Karissa','Jayde','Valeria','Ashtyn','Maximus','Shaniya','Clayton','Raelynn','Turner','Kolten','Christina','Allan','Penelope','Rylee','Neveah','Jazmyn','Charli','Damion','Ava','Yaretzi','Lilah','Camden','Lilyana','Aleigha','Kobe','William','Maleah','Orion','Jaeden','Alfonso','Temperance','Ailish','Emmanuel','Seth','Saul','Justice','Cohen','Allison','Emerson','Johanna','Adena','Jessica','Grayson','Leonel','Haleigh','Annika','Johnathan','Aerilyn','Leo','Presidential','Jasper','Uriel','America','Kelvin','Denver','Dilan','Leonard','Harley','Alina','Cristina','Abdukrahman','Karson','Avianna','Arthur','Leonardo','Scarlett','Arielle','Melissa','Brooke','Edison','German','Leanna','Armando','Adsila','Jensen','Ajani','Amani','Morgan','   zTerrell','Natalya','Justus','Darwin','Franklin','Ryland','Lincoln','Brice','Tobias','Grant','Koa','Kristina','Kailey','Julianne','Kaia','Josue','Crystal','Adriana','Violet','Diana','Breanna','Tenley','Tyrese','Phoebe','Josiah','Star','Aimon','Mercedes','Hailee','Jacob','Leon','Ximena','Kyndal','Helena','Maliah','Brandon','Jolene','Molly','Polish','Roselyn','Zachariah','Adalia','Thomas','Paige','Ameer','Soren','Patrick','Adia','Brenden','Aerona','Sterling','Kairi','Chandler','Makhi','Ronan','Aerith','Related','Post','Adelie','Charity','Tommy','Anabel','Carleigh','Santiago','Jaylon','Martin','Milania','Dana','Alexa','Aryanna','Mariam','Alair','Gary','Makenzie','Hayes','Nathaly','Case','Tinley','Agape','Alejandro','Rhett','Italian','Norse','Kamron','Sydney','Giovani','Meghan','Thatcher','Adila','Azaria','Brendan','Corbin','Bryson','Julian','Eden','Caden','Graysen','Nature','June','Jay','Izayah','Bailey','Elaina','Ada','Amos','Markus','Autumn','Lana','Tanner','Rivka','Princess','Africa','Amelia','Kase','Lesli   {e','Decker','Christine','Katelyn','Macie','Maci','Ayanna','Kinley','Madilyn','Catherine','Adan','Alec','Skyla','Yasmin','Oscar','Hassan','Conner','Lillianna','Nyla','Angela','Acadia','Sage','Isis','Carmelo','Leif','Dayana','Karma','Bishop','Briana','Luca','Cayden','Erica','Karina','Planet','Irene','Jaydon','Teresa','Sabrina','Adelyn','Jamison','Desmond','Rebekah','Agostino','Bo','Deon','Spanish','Demi','Brogan','Amir','Farrah','Izabelle','Reyna','Cailyn','Jorge','Jimena','Jeffrey','Niko','Zaid','Zara','Maxx','Corinne','Deanna','Fletcher','Marcus','Martha','Mateo','Matthias','Madeline','Tiana','Ashlynn','Grady','Bridger','Benton','Judson','Lauren','Cassandra','Tadeo','Nora','Cade','Briar','Kaylee','Aaralyn','Gracie','Blaine','Elisha','Stella','Owen','Selah','Brentley','Lacey','Miguel','Kendra','Andre','Amare','Erika','Lexi','Caleb','Diamond','Miriam','Heather','Ahmad','Branson','Misael','Malcolm','Tucker','Issac','Kenzie','Xzavier','Kaleigh','Christopher','Willow','Gavin','Aiko','Camille','Harold','Andy','   |Jermaine','Jaqueline','Adie','Zuri','Duncan','Micah','Jaylynn','Brenna','Flower','Jagger','Lucille','Elliott','Vivienne','Camryn','Jaylee','Karla','Reign','Aniyah','Johnathon','Bryan','Kaylin','Giovanna','Japanese','Adaya','Rodney','Harrison','Coleman','Kael','Annie','Diya','Raul','Marianna','Abel','Gabriella','Hector','Eva','Jemma','Lane','Davon','Jolie','Alannis','Beckett','Mary','Kaysen','Blaze','Pedro','Jaylen','Brayan','Claire','Davian','Kale','Rylie','Jordynn','Alyvia','Malia','Jovanni','Renee','Taylor','Courtney','Samuel','Paris','Kelly','Nicolas','Priscilla','Giana','Jefferson','Aubri','Arnav','Addy','Marisa','Vihaan','Zoie','Emanuel','Ezekiel','Ryan','Emmet','Kody','Derrick','Amy','Adalynn','Bryce','Maximilian','Aspen','Alex','Millie','Shane','Rafael','James','Boone','Meredith','Agatha','Abie','Kayla','Kailynn','Leandro','Yosef','Emely','Omari','Adamina','Sariyah','Myla','Riya','Isabelle','Samson','Marilyn','Moises','Eliana','Ray','Celeste','Eileen','Monica','Izaiah','Carolina','Destiny','Alannah   }','Braelyn','Chace','Brooklyn','Maeve','Ares','Sierra','Quinn','Edward','Noemi','Allie','Terry','Jadyn','Walter','Aliyah','Ajax','Fernanda','Kaylie','Amya','Melody','Dahlia','Veronica','Tara','Benjamin','Masen','Agalia','Aviana','Rylen','Absolom','Felipe','Cyrus','Raelyn','Eve','Valentina','Caspian','English','Tristin','Adam','Baylee','Zayn','Tyson','Dutch','Ryleigh','Zyaire','Megan','Dillon','Apollo','Giovanni','Hope','Ramon','Kylie','Londyn','Delaney','Madisyn','Rylan','Drake','Kaitlynn','Lexie','Sidney','Braylon','Krystal','Gordon','Quentin','Nathan','Memphis','Mckinley','Adrina','Aimee','Shania','Eddie','Anthony','Akuji','Maximo','Luciana','Gustavo','Esperanza','Garrett','Athena','Juliana','Claudia','Mauricio','Aidyn','Jack','Jude','Saniyah','Jaden','Danika','Marlene','Asia','Raphael','Calvin','Xavier','Nicole','Genesis','Madelynn','Maddux','Kaleb','Laila','Maia','Demetrius','Zoe','Nayeli','Kade','Arlo','Kailee','Keyla','Adalira','Hungarian','Sloane','Kyron','Micheal','Jovani','Shmuel','Leighton','Uri   ~ah','Emmy','Marie','Harmony','Cooper','Amina','Abril','Lillian','Landyn','Jazlynn','Summer','Layla','Kasen','Ana','Adymn','Jabari','Marlon','Zariyah','Adamma','Hendrix','Sean','Amalia','Kiara','Madelyn','Lauryn','Abiba','Malaki','Emmalee','Abram','Devin','Latin','Janelle','Achava','Mitchell','Kimber','Lionel','Yuliana','Yehuda','Renata','Quinten','Zane','Olive','Celia','Danish','Jakobe','Keon','Paloma','Charlotte','Miah','Ignacio','Brylee','Austin','Coen','Milagros','Helen','Alessandra','Colby','Malaysia','Julissa','Damarion','Devon','Axel','Brent','Preston','Amaya','Miles','Emersyn','Galilea','Chelsea','Adolf','Aileen','Adina','Akamu','Vicente','Donald','Clinton','Spencer','Orlando','Gavyn','Muhammad','Atlas','Lydia','Sharon','Emmitt','Johnny','Fiona','Tristan','Gregory','Colton','Payton','Boston','Dawson','Lorenzo','Griffin','Janiya','Aiden','Precious','Mark','Joshua','Alexis','Cain','Alejandra','Jax','Dallas','Bradley','Abrienda','Nikolas','Anabella','Chad','Santino','Danica','Isabella','Kaya','Damari'   ,'Jaida','Alberto','Egyptian','Alamea','Axl','Bruce','Jerry','Fabian','Jonathon','Luna','Adrien','Quincy','Bennett','Aydan','Maggie','Leonidas','Dakota','Jamal','Margaret','Aderes','Ady','Wesley','Charley','Zoey','Karlee','Matthew','Belen','Arya','Lylah','Brenda','Shiloh','Edith','Nickolas','Krish','Cash','Vance','Macey','Jaiden','Gianluca','Saniya','Chanel','Anders','Freddy','Maryam','Whitney','Gunner','Ian','Akilah','Keagan','Danna','Scottish','Jewel','Esme','Cullen','Alfred','Aiyana','Cristian','Alissa','Quintin','Kevin','Adarsh','Louis','Aubrianna','Toby','Esteban','Serena','Jesse','Rayna','Katie','Graham','Anton','Myah','Chana','Adwin','Enrique','Sara','Paityn','Jazmine','Giuliana','Tessa','Hunter','Elisabeth','Adeline','Russell','Adrienne','Thalia','Manuel','Kamryn','Giancarlo','Alaqua','Joseph','Ledger','and','Jake','Emiliano','Stanley','Kinsey','Dylan','Nina','Howard','Julio','Keira','Caitlyn','Jon','Laura','Harvey','Rex','Ariana','Callum','Lilith','Melina','Castiel','Luke','Abana','Patience','Kya   �n','Conrad','Jaylin','Mira','Willie','Lizbeth','Davin','Gwyneth','Joaquin','Prince','Tyrell','Adelphie','Haylie','Rose','Liberty','Leila','Willa','Jeremias','Trevor','Santos','Amber','Gideon','Jorden','Camila','Zackary','Aiken','Mathew','Zaire','Lina','Juliet','Elian','Max','Fox','Sonia','Zachary','Isaiah','Adli','Fatima','April','Bentley','Rayan','Bianca','Jessie','Brennen','Carley','Reyansh','Korbin','Clyde','Kaeden','Braelynn','Hayley','Isabell','Makayla','Brynlee','Madalynn','Chaim','Dorothy','Derick','Jamie','Aydin','Lilianna','Shawn','Damon','Demarcus','Abbott','Damaris','Shayla','Danny','Bodie','Donte','Ethan','Mohammed','Landen','Carmen','Bryant','Troy','Nahla','Jonas','Noelle','Ariel','Zayne','Ibrahim','Alyson','Cortez','Emilia','Jakayla','Kolby','Jeramiah','Jerome','Jadon','Jamar','Alexia','Porter','Reagan','Abilene','Kensley','Kole','Camdyn','Curtis','Chance','Paul','Yusuf','Travis','Azariah','Isiah','Aliya','Hayleigh','Shakespearean','Jaime','Madilynn','Aj','Lamar','Jadiel','Tomas','Moriah','K   �yson','Halle','Byron','Makenna','Adora','Ramiro','Alice','Abbigail','Annalise','Simon','Susan','Trystan','Kyla','Kairo','Rodolfo','Rachael','Abdiel','Romeo','Maksim','Cora','Brock','Hugo','Aisha','Olivia','Sincere','Abia','Isai','Gisselle','Daisy','Aleah','Jayden','Trace','Killian','Emma','Vincenzo','Jaylah','Camron','Raquel','Lucca','Jad','Sarah','Mckayla','Paola','Occupational','Britney','Shepard','Cairo','Akio','Marcelo','Ross','Guillermo','Salvatore','Keaton','Presley','Mariana','Yamileth','Noel','Gunnar','Dario','Adele','Beatrice','Joey','Van','Jacqueline','Karsyn','Aisling','Chaya','Raiden','Ayleen','Evie','Ryker','Kenley','Carolyn','Mae','Lennox','Adelynn','Xavi','Lara','Logan','Kye','Robert','Alan','Johann','Portuguese','Billy','Kyler','Kendyl','Greyson','Briggs','Greysen','Kannon','Victoria','Aila','Angie','Casey','Abby','Mariyah','Reginald','Rocky','Devan','Averie','Gage','Paulina','Lily','Joy','Michael','Color','Adair','Anya','Clara','Elyse','Laurel','Bodhi','Pamela','Braxton','Ruth','Kennedy',   �'Branden','Scott','Maya','Quinton','Carter','Greta','Ryder','Jonah','Alistair','Jamari','Georgia','Roy','Melany','Piper','Darren','Kingsley','Cory','Westin','Raylan','Kristopher','Nelson','Madison','Amirah','Colin','Jaxen','Braylin','Abra','Daniel','Kelsie','Terrence','Paula','Jacoby','Ruben','Charleigh','Gianni','Wade','Bobby','Triston','Marvin','Acacia','Kylen','Abdullah','Angelica','Jaxx','Layton','Dustin','Caitlin','Caydence','Addison','Elijah','Osvaldo','Brenton','Audrianna','Brennan','Hazel','Abbey','Douglas','Miller','Andrew','Alianna','Aylin','Deshawn','Albert','Zavier','Raegan','Colten','Luis','Kirsten','Camren','Rowen','Samir','Leigha','Judith','Kallie','Alarice','Savanna','Edwin','Thiago','Duke','Audrina','Francisco','Emmett','Gia','Jaxton','Kamille','Hanna','Sloan','Connor','Cheyenne','Johan','Madalyn','Vaughn','Iliana','Gatlin','Kathryn','Gabriela','Holden','Kayleigh','Ansley','Ember','Aira','Zaniyah','Viviana','Aryana','Ronald','Yadiel','Maverick','Madden','Jaycee','Rebecca','Cindy','Holly',   �'Trey','Katelynn','Aron','Dalia','Jordy','Adara','Kace','Hudson','Samantha','Bryn','Craig','Augustine','Yahya','Judah','Ean','Barrett','Kiersten','Teagan','Abarne','Winston','Sanaa','Silas','Finn','Marshall','Lola','Kali','Alayna','Bradyn','Elsie','Kyleigh','Braeden','Cale','Meadow','Knox','Salma','Isabel','Keegan','Ivanna','Luciano','Kristen','Riley','Corban','London','Bristol','Yamilet','Lewis','Zackery','Cecelia','Alexandria','Josephine','Liliana','Lilyanna','Mariano','Jesus','Cedric','Keith','Cara','Jacey','Antonio','Lukas','Kash','Frances','Zeke','Kaylen','Abbie','Jaelyn','Elle','Jada','Adeola','Shelby','Felix','Wilson','Aniya','Terrance','Clark','Kadence','Abeni','Maxton','Dennis','Trent','Kellen','Chloe','Abhay','Alabama','Carla','Maxwell','Abraham','Abrianna','Denise','Ivan','Analia','Paisley','Canaan','Jameson','Zayd','Shepherd','Slavic','Kinsley','Aizza','Khloe','Trade','Maison','Sadie','Carson','Lindsey','Alden','Corey','Alani','Itzel','Ephraim','Keanu','Kohen','Alyssa','Ismael','Elliot','Brian   �','Geraldine','Finley','Irvin','Kassidy','Richard','Ricardo','Alexzander','Tianna','Keyon','Kaylyn','Langston','Houston','Myles','Charles','Katherine','Brycen','Ruby','Bryanna','Neil','Airlia','Ashley','Isla','Callen','Tate','Moshe','Cadence','Miranda','Sofia','Hadley','Deven','Avah','Shaun','Skyler','Bree','King','Cole','Trevon','Avi','Hezekiah','Laney','Alena','Eliezer','Tamia','Jerimiah','Tyler','Crosby','Malaya','Ralph','Vivian','Roman','Mackenzie','Javion','Henrik','Kamila','Joe','Kailyn','Rohan','Gerald','Beau','Carlee','Kasey','Hank','Jase','Elaine','Rosemary','Annabel','Lila','Alisha','Rey','Mario','Eric','Finnish','Weston','Alexander','Kyree','Alma','Savannah','Collin','Dean','Jayce','Samiya','Rory','Easton','Jackson','Ahanu','Kynlee','Peter','Sky','Brixton','Chinese','Aditya','Delilah','Charlie','Julieta','River','Kaitlyn','Liv','Valerie','Adriel','Javon','Zander','Lilliana','Leia','Ailsa','Alvin','Cherish','Roberto','Talon','Jaxon','Hannah','Jonathan','Crew','Marisol','Mara','Mekhi','Jaycob','S   �tephanie','Franco','Braiden','Siena','Maddox','Abigail','Ulises','Brinley','Hamza','Gabrielle','Reid','Elvis','Alaina','Ethen','Royce','Julien','Anaya','Keenan','African','Jane','Deacon','Khalid','Ford','Ariella','Akili','Campbell','Randall','Levi','Jamarion','Andrea','Heaven','Joyce','Dangelo','Adonai','Animal','Yesenia','Donovan','Princeton','Mikaela','Taryn','Yahir','Lesly','Imani','Westley','Jasmine','Bryleigh','Maxim','Achilles','Cynthia','Lucas','Konnor','Adelle','Xander','Giselle','Saige','Evelynn','Erick','Reuben','Tristen','Abcde','Jedidiah','Kayson','Genevieve','Cassius','Aubree','Emmalyn','Esmeralda','Jalen','Jose','Kimberly','Joel','Marissa','Mina','Cael','Ira','Gael','Lachlan','Daxton','Bently','Heidi','Jaylyn','Ingrid','Javier','Eduardo','Aithley','Kamren','Raven','Conor','Elias','Matias','Nasir','Blair','Armani','Celtic','Janessa','Jimmy','Blakely','Odin','Marco','Tripp','Eloise','Adler','Kane','Kaison','Fernando','Adalyn','Joslyn','Augustus','Deegan','Enoch','Fisher','Aarav','Hailey','Kyra   �','Kassandra','Harlow','Jordan','Elisa','Matteo','Miracle','Michelle','Haiden','Melvin','Brody','Mattie','Julianna','Janiyah','Baylor','Aine','Jaziel','Channing','Anne','Journee','Mckenzie','Nico','Brett','Kendal','Dariel','Esther','Carly','Aubrey','Emory','Kaylynn','Isaias','Haley','Bronson','Aceline','Dalton','John','Diego','Colt','Rayden','Selena','Wayne','Eli','Ai','Acelynn','Grey','Julia','Luka','Dorian','Kenny','Briley','Gaige','Joziah','Malik','Dayton','Michaela','Ellie','Arjun','Airi','Bruno','Dimitri','Todd','Sergio','Kyndall','Sullivan','Israel','Adah','Ace','Rodrigo','Hebrew','Kaitlin','Liam','Naomi','August','Ezequiel','French','Mayson','Mason','Dash','Gilbert','Kyrie','Dane','Urijah','Place','Jared','Jayla','Anika','Stacy','Felicity','Aliza','Kendrick','Mike','Lisa','Dominik','Alanna','Frederick','Hugh','Titan','Kenya','Khalil','Sariah','Kylan','Arian','Payten','Blaise','Afia','Darnell','Cambria','Warren','Aindrea','Simeon','Myra','Davis','Aden','Amanda','Heath','Perla','Jazlyn','Kayden','Eme   �lia','Lea','Tori','Moses','Nova','Maliyah','Archer','Skye','Jair','Audriana','Darien','Brittany','Aleena','Linda','Lindsay','Bella','Musa','Anna','Samiyah','Mathias','Aideen','Eliseo','Angelina','Adel','Ellis','Allen','Aeryn','Jayda','Cali','Trenton','Marina','Rowan','Averi','Adelina','Natasha','Caiden','Nia','Bethany','Emilio','Sam','Gwendolyn','Kason','Henry','Adelio','George','Tony','Marcel','Kylee','Rayne','Kaelyn','Ernesto','Raina','Anderson','Arturo','Larissa','Mack','Caylee','Roger','Ivy','Wesson','Kamari','Taraji','Amari','Alijah','Elizabeth','Zahir','Karly','Zechariah','Rolando','Aki','Daphne','Jakob','Amara','Catalina','Zayden','Briella','Marley','Lena','Ayana','Sawyer','Victor','Ari','Lyric','Scarlet','Jaelynn','Aadi','Adoncia','Nehemiah','Arely','Adiel','Phoenix','Ayden','Kate','Kyng','Cody','Carlie','Izabella','Drew','Adit','Yazmin','Mila','Ailis','Clare','Native','Steven','Jasiah','Gemma','Natalie','Amira','Deangelo','Adrianna','Juliette','Yareli','Brysen','Cecilia','Gibson','Serenity','Mila   �na','Emily','Lia','Lathan','Agamemnon','Lance','Joanna','Janet','Literary','Brecken','Ali','Ann','Harry','Lucian','Gauge','Andres','Lainey','Rachel','Elena','Daniela','Angel','Cruz','Frank','Deandre','Accalia','Axton','Jayson','Marlee','Barbara','Norah','Karen','Oakley','Randy','Kaliyah','Simone','Evan','Nathalie','Brayson','Philip','Cristiano','Edgar','Natalee','Timothy','Contemporary','Joselyn','Regan','Alivia','Rosalie','Ade','Yiddish','Kiera','Abrielle','Lochlan','Marquis','Mallory','Nataly','Jaxson','Zaria','Sarai','Ayaan','Anabelle','Enzo','Jazmin','Isabela','Kaydence','Merrick','Clarissa','Lee','Adri','Foster','Jason','Jayleen','Cesar','Gracelyn','Karis','Melanie','Czech','Gerardo','Adrian','Cayson','Nadia','Matilda','Mohammad','Madeleine','Sonny','Tabitha','Iris','Broderick','Remington','Addyson','Miley','Ernest','Cassidy','Gilberto','Dominick','Angeline','Anahi','Theo','Jade','Welsh','Santana','Kendall','Aelwen','Otto','Aaliyah','Jeffery','Lucy','Wendy','Alessandro','Erin','Steve','Finnley','Nyla   �h','Mya','Rene','Stefan','Kylah','Madyson','Haylee','Elin','Annabelle','Talia','Marc','Jeremiah','Huxley','Braden','Alicia','Oliver','Adabella','Brady','Parker','Kennedi','Mohamed','Ronnie','Atticus','Gem','Jeremy','Karter','Sophie','Kellan','Larry','Iker','Lucia','Camilla','Arabic','Brooklynn','Leroy','Exotic','Adonia','Haven','Nathanael','Zariah','Lyla','Word','Ajay','Kingston','David','Yaritza','Darian','Angelo','Camilo','Amiyah','Rhys','Vera','Jordyn','Lailah','Landon','Zaiden','Annabella','Arianna','Will','Ainsley','Ben','Eleanor','Messiah','Dax','Nikolai','Paxton','Mia','Brisa','Kaiser','Jayceon','Beckham','Adriano','Guadalupe','Trinity','Ciara','Ty','Bentlee','Lilia','Abner','Juan','Colson','Brooks','Derek','Jennifer','Sylas','Francesca','Eugene','Brianna','Royal','Gabriel','Kameron','Danielle','Wyatt','Airell','Rocco','Titus','Kaden','Patricia','Tatiana','Green','Desiree','Aurora','Brantley','Scandinavian','Lawson','Macy','Roland','Draven','Brendon','Jaydan','Jillian','Kiley','Tristian','Adonis','   �Catalina']); function randomWords(words, txtArray) { var result = ''; for (var i = words; i > 0; --i) result += txtArray[Math.floor(Math.random()*txtArray.length)]; return result; }\") \n";
    openParams += "SET !VAR2 EVAL(\"randomWords(1, ['Kayleigh','Makai','Harvey','Averi','Beatrice','Addison','Maliah','Emanuel','Dylan','Ira','Elaine','Johnny','Tyrell','Briggs','Israel','Ruben','Ciara','Mike','Lucas','Ibrahim','Layne','Branson','Samiya','Jakob','Marina','Scarlett','Adrian','Pierce','Lilyana','Molly','Lilah','Shelby','Sloane','Elsie','Danish','Eloise','Annalise','Vaughn','Madelynn','Myah','Armani','Nickolas','Donald','Julian','Cyrus','Galilea','Amira','Pamela','Drake','Samuel','Kendal','Charles','Teresa','Gwendolyn','Alair','Dimitri','Jared','Flynn','Rivka','Mattie','Kimber','French','Aimi','Greysen','Marie','Kaitlynn','Franklin','Caitlin','Johnathon','Mason','Azaria','Jayda','Turner','Michelle','Vanessa','Christian','Allison','Adalira','Vincent','Aiden','Jaeden','Ernesto','Santino','Sidney','Rory','E   �lias','Hallie','Knox','Trent','Amare','Clark','Axl','Briella','Javon','Ronan','Yadiel','Jazlyn','Trace','Sawyer','Rocky','Cesar','Vivian','Allie','Kaitlin','Messiah','Beckett','Zayn','Adiel','Kael','Jaydan','Romeo','Carly','Adriana','Ingrid','Morgan','Jacqueline','Noah','Matthias','Bryce','Danika','Clayton','Laura','Atlas','Jaylynn','Adia','Noelle','Lindsay','Konner','Riley','Kyan','Jadiel','Stephanie','Trinity','Swedish','Tristen','Aspen','Damon','Chinese','Hayden','Kendyl','Adalynn','Koda','Yareli','Ledger','Jadon','Elian','Felix','Kimberly','Kyron','Charlee','Rene','Amelie','Krystal','Bryn','Miles','Leila','Madalynn','Kinsley','Gunner','Absolom','Karina','Jaylin','Kadence','Courtney','Kinsey','Mariyah','Saniyah','Lorelei','Rex','Vera','Anabella','Antonio','Nova','Larry','Arthur','Margaret','Brysen','Beckham','Tinley','Clyde','Sonia','Mariam','Colt','Mira','Christopher','Aria','Malaki','Bentley','Akiva','Giselle','Star','Liam','Reece','Victoria','Raelynn','Anton','Westley','Eliseo','Natalie','Damien','A   �chilles','Marquis','Lyric','Graysen','Trenton','Justus','Ross','Imani','Ryder','Janelle','Caleb','Amya','Anna','Jacoby','Jaxx','Italian','Hamza','Sariah','Cohen','Karen','Danna','Abel','Zane','Kaia','Kyleigh','Amalia','Adarsh','Afia','Blaine','Camden','Mckenna','Janiya','Maliyah','Semaj','Rebecca','Kai','Kenna','Zaid','Adelaide','Vance','Hattie','Jaime','Izayah','Forrest','Malcolm','Anders','Ximena','Hadley','Gordon','Celia','Lionel','Jane','Dominick','Ephraim','Evan','Garrett','Mayson','Amy','Aelwen','Malachi','Braylee','Kaleigh','Daisy','Sam','Myles','Jensen','Audrina','Aderes','Kaleb','Lilianna','Matthew','Kimora','Robert','Alena','Grant','Gunnar','Dixie','Jazmine','Jakayla','Ruby','Rocco','Augustus','Samson','Aaden','Aaliyah','Silas','Nyla','Sadie','Diya','Erin','Kendra','Kathleen','Sean','Jolene','Leona','Rylie','Marcos','Millie','Selah','Wesson','Jaziel','Jasper','Anya','Clare','Baylee','Yamileth','Arian','Carla','Lorenzo','Akamu','Bentlee','Gabriella','Audriana','Dax','Kylan','Livia','Sydney','Auro   �ra','Jordan','Santiago','Ignacio','Kody','Kaiya','Yaretzi','Jefferson','Adrianna','Kaylyn','Crosby','Kashton','Karla','Hezekiah','Eli','Autumn','Nicolas','Abcde','Zaiden','Deshawn','Green','Franco','Johanna','Zara','Judah','Titan','Keyon','Keagan','Brecken','Jadyn','Diamond','Joel','Kaiden','Theodore','Yehuda','Ashtyn','Emersyn','Diana','Sienna','Tristin','Krish','Nikolai','Aryana','Amos','Yousef','Crew','Adlai','Adel','Greek','Nayeli','Hendrix','Leon','Case','Davion','Linda','Bently','Joyce','Fernando','Arya','Jessie','Henrik','Salvador','Ai','Kylee','Dominic','Tobias','Saige','Khalil','Kelsie','Porter','Guillermo','Karlie','Alyssa','Aira','Junior','Eliza','George','Leah','Harlan','Alarice','Yiddish','Ryleigh','Darius','Langston','Raven','Gloria','Braxton','Alfredo','Jad','Callie','Cristopher','Alfonso','Javier','Jamarion','Isabela','Zackery','Mckinley','Felicity','Landen','Jaylah','Grace','Damion','Ella','Adamma','Kaylin','Jaylyn','Jayla','Khloe','Landon','Keith','Matias','Finley','Bowen','Ford','Jamal'   �,'Alaina','Keenan','Reed','Casey','Julieta','Malakai','Vivienne','Jeffery','Bristol','Lola','Alonzo','Abbott','Cash','Chandler','Brooklynn','Anastasia','Alaya','Charlotte','Laney','Lea','Genevieve','Rohan','Aaralyn','Rashad','Marshall','Noemi','Miller','Davin','Gemma','Jaxson','Kristina','Lena','Cristian','Czech','Ady','Jake','Jamir','Tucker','Maryam','Brenton','Hannah','Trevon','Jaliyah','Raegan','Marco','Maximus','Adaya','Channing','Kannon','Jaylon','Lilian','Carl','Henry','Myra','Brixton','Kohen','Jaxen','Adriel','Reagan','Mikayla','Castiel','Tamia','Evangeline','Avery','Aleah','Julissa','Maddux','Alivia','Princess','Mae','Aine','Tara','Kason','Corinne','Camilo','Kale','Welsh','Jaycee','Noel','Callen','Chana','Maia','Gary','Erika','Scott','Kendall','Curtis','Oakley','Milan','Shepherd','Juliana','Arturo','Luke','Kamille','Anthony','Major','Canaan','Derek','Nola','Ajani','Atticus','Susan','Lance','Mina','Rafael','Aden','Aiken','Hailee','Casen','Brooks','Dayana','Armando','Kiera','Zoe','Kairo','Cindy','Je   �remiah','Maci','Lexie','Megan','Mohamed','Nasir','Ayana','Lucca','Malaysia','Adam','Jazlynn','Luka','Antoine','Louie','Aisling','Carmelo','Anaya','Annabel','Renee','Hector','Emilie','Koa','Macie','Boston','Amaya','Harry','Destiny','Vicente','Kristen','Neveah','Jocelyn','Cara','Ean','Rose','Haleigh','Elianna','Alannah','Desmond','Briley','Dwayne','Place','Tomas','Malik','Francis','Eric','Derick','Emelia','Lukas','Nehemiah','Kailyn','Apollo','Charli','Lana','Tegan','Kylie','Karsyn','Serena','Carmen','Jeffrey','Adri','Kirsten','Terrance','Ajay','Quintin','Dominique','Ulises','Jair','Gabriel','Arlo','Africa','Aniyah','Winston','Londyn','Kolby','Amir','Rayna','Cole','Otis','Kristopher','Kiara','Aubrie','Cherish','Omari','Walter','Jamar','Tristian','Jermaine','Bruno','Kelly','Kelvin','Thatcher','Julien','Edison','Mitchell','Jude','Cora','Yahya','Siena','Danica','Ivanna','Hassan','Leland','Dutch','Korbin','Kyson','Ahava','Marlene','Brooke','Axton','Reginald','Janae','Skyla','Paloma','Ashlyn','Aggie','Caylee','Ro   �yal','Edward','Madilynn','Malaya','Sincere','Griffin','Moises','Raymond','Celeste','Lacey','Juniper','Kamron','Otto','Angelica','Valeria','Karter','Roland','Rachel','Maksim','Carley','Mack','Jackson','Egyptian','Branden','English','Anabel','Benjamin','Enoch','Jordyn','Kian','Jade','Marilyn','Zahir','Maddox','Alani','Esperanza','Violet','Andre','Sandra','Maximiliano','Adelle','Dustin','Kaysen','Aideen','Catherine','Adyson','Aimee','Exotic','Addy','Colson','Arielle','Cali','Mohammed','Allan','Camila','Cheyenne','Ramon','Elaina','Joshua','Lina','Halle','Mariah','Japanese','Savannah','Dakota','Nathalie','Willow','Marianna','Alejandra','Adita','Maleah','Ember','Jayce','Chanel','Ayden','Enrique','Simeon','Keon','Jaylen','Kasey','Paige','Gianni','Abiba','Calvin','Uriah','Warren','Melody','Josie','Regina','Madeleine','Rachael','Marlee','Edgar','Walker','Kaelyn','Temperance','Miya','Gauge','Colby','Leilani','Chloe','Coen','Carlie','Gabriela','Kenley','Gilbert','Lachlan','Abril','Melissa','Axel','Chaim','Abeni','Sa   �mantha','Alex','Parker','Xavi','Elvis','Catalina','Lauryn','Yesenia','Denise','Zyaire','Dominik','Preston','Gibson','Andrea','Taliyah','Anakin','Emely','Lilia','Lia','Airi','Ivan','Marisa','Titus','Kellan','Sabrina','Alice','Josiah','Brandon','Erica','Akia','Talia','Claire','Taryn','Elisha','Britney','Amari','Dorothy','Ahmed','Fabian','Damari','Joanna','Elle','Kaydence','Finnley','Giada','Willa','Raul','Kyle','Luna','Louis','Todd','Kobe','Nadia','Quentin','Meredith','Aubree','Delilah','Elisabeth','Emmalee','Agape','Gracelynn','Cael','Belen','Deborah','Bishop','Hudson','Esme','Alisson','Fernanda','Blakely','Lillie','Tyson','Farrah','Valentina','Crystal','Shane','Rodolfo','Maximo','Ameer','Julianne','Camilla','Santos','Scarlet','Cailyn','Olivia','Carissa','Cristiano','Jazmyn','Abbie','Xzavier','Xander','Enzo','Lochlan','Camille','Cody','Rihanna','Charity','Jaqueline','Annika','Tiffany','Meghan','Aubri','Elijah','Cason','Zaria','Shania','Alyson','Ayleen','Georgia','Zayd','Jazmin','Ari','Melina','Myla','Bryle   �e','Max','Jaydin','Byron','Roy','Graham','Agamemnon','Omar','Abilene','Sullivan','Lyla','Ezekiel','Lesly','Haley','Zachariah','Cheyanne','Native','Marcel','Alexandria','Issac','Karissa','Melanie','Aydin','Leanna','Aldo','Ismael','Janessa','Maurice','Tony','Ray','Julia','Kameron','Rhys','Alyvia','Heath','Mollie','Macey','Dawson','Rosalie','Amiyah','Dexter','Orion','Jaiden','Liberty','Emerson','Alonso','Scottish','Gracelyn','Adrina','Dilan','Kennedi','Macy','Martin','Mia','Miley','Thalia','Cadence','Marvin','Rowen','Moses','Ariel','Bjorn','Gem','Estrella','Agustin','Luciana','Braelyn','Renata','Jolie','Isis','Darryl','Angelique','Terrell','Lilliana','Akio','Ruth','Russian','Keira','Kailey','Aniya','Danielle','Ace','Aliya','Lizbeth','Randall','Achava','Jovani','Tadeo','Raelyn','Brock','Bodie','Aliyah','Simon','Elizabeth','Amber','Claudia','Giancarlo','Lawson','Carter','Niko','Angeline','Yaritza','Acelynn','Viviana','Jeremy','Kinley','Isaiah','Lexi','Jett','Bridget','Marley','Adymn','Briar','Maggie','Emily','   �Haiden','Devin','Mallory','Isabelle','Carlee','Tate','Barrett','Trevor','Annabell','Gavin','Conor','Jerry','Salma','Alexandra','Kiersten','Makhi','Marcelo','Shaun','Brayden','Kymani','Mariana','Makayla','Gerardo','Alfred','Gael','Alexia','Cortez','Isai','Abana','Caitlyn','Tiana','Josue','Keyla','Kasen','Natalya','Shaniya','Camdyn','Davis','Irish','Caspian','Jaron','Payton','Haylee','Lylah','Ian','Adah','Alana','Brenden','Carolina','Justin','Anson','Alexis','Journee','June','Bird','Rosemary','Denver','Natalia','Brody','Stephen','Aerilyn','Muhammad','Brenda','Nixon','Tanner','Wilson','Shiloh','Elin','Eason','Brayan','Kaylen','Yisroel','Adonia','Aron','Shannon','Acotas','Nylah','Travis','Natalee','Ayan','Bryleigh','Jaelyn','Terrence','Jocelynn','Deven','Maddison','Ally','Aliza','Devan','Dalton','Blake','Zackary','Alaqua','Veronica','Malia','Erik','Ellen','Nelson','Layla','Lainey','Ajax','Misael','Liv','Hayley','Oscar','Grey','Urijah','Ryan','Finnegan','Charleigh','Jaxon','Athena','Leyla','Kaylie','Audrianna'   �,'Gilberto','Kynlee','Kristian','Bryson','Maison','Allen','Deandre','Desiree','Kingsley','Charlie','Neil','Adish','Anderson','Ayanna','Lilith','Chelsea','Abram','Augustine','Billy','America','Trystan','Kaya','Marcus','Cayson','Geraldine','Esther','Zariah','Mateo','Sergio','Adwin','Zuri','Kalel','Cecilia','Deegan','Azariah','Kiley','Annie','Lucy','Juan','Freddy','Leigha','Zoie','Johan','Lincoln','Benson','Shepard','Ailish','Jayleen','Ryker','Peyton','Liliana','Elise','Samir','Jacob','Sloan','Skyler','Amanda','Gustavo','Jaidyn','King','Maxx','Natasha','Nathan','Lillianna','Daniel','Hana','Harrison','Paul','Nicholas','Maxwell','Cassius','Gwyneth','Lane','Acadia','Airell','Hugo','Sariyah','Brogan','Arabic','Angelo','Adelphie','Aileen','Related','Post','Donte','Elyse','Juelz','Fox','Diego','Magnus','Akuji','Demetrius','Alexander','Remington','Clinton','Jordynn','Daniella','Lorelai','Damian','Katie','Melvin','Abigail','Jack','Adina','Jean','Brendan','Peter','Phoenix','Adair','Edith','Paola','Abba','Nolan','Abha   �y','Kali','Hank','Aizza','Kieran','Leonidas','Hebrew','Adriano','Kellen','Jasmine','Nico','Deangelo','Karly','Kaelynn','Aderyn','Demi','Efrain','Talon','Alamea','Kyndall','Aidric','Rylee','Mackenzie','Demarcus','Ade','Adrien','Kareem','Memphis','Jaycob','River','Blaise','Jonathan','Andy','Eve','Marc','Gideon','Aila','Abrianna','Clarissa','Ricardo','Holly','Kevin','Bailee','Oliver','Zariyah','Brittany','Jamari','Alberto','Jaida','Salvatore','Carleigh','Jabari','Abraham','Maritza','Patrick','Kayson','Alijah','Gianluca','Randy','Skylar','Paisley','Zayne','Aimon','Easton','Stacy','Jacey','Karson','Olive','Leonel','Darwin','Rhett','Darian','Mariano','Raiden','Kyrie','Amiya','Elliana','Rayne','Cairo','Agostino','Taraji','Jimmy','Sarahi','Rodney','Angela','Joey','Alisha','Andrew','Jada','Virginia','Agatha','Boone','Archer','Kamren','Ishaan','Aiko','Houston','Raquel','Vincenzo','Adonai','Serenity','Ramiro','Rayden','Marlon','Julie','Color','Brielle','Edwin','Rowan','Faith','Dillon','Sierra','Zachary','Iris','Isab   �ell','Justice','Reyna','Micah','Cruz','Destinee','Aidyn','Nina','Mikaela','Danny','Adolf','Timothy','Audrey','Madison','Micheal','Konnor','Abia','Brynlee','Jonas','Sherlyn','Lilyanna','Corban','Tia','Leandro','Alayah','Emmy','Elisa','Laurel','Cecelia','Finnish','Ellis','Ansley','Ronald','Draven','Ridge','Karma','Alvaro','Akira','Haylie','Damaris','Nathaly','Joseph','Alina','Adli','Troy','Makenzie','Mckayla','Jax','Moriah','Jerimiah','Kaden','Valentino','Presley','Roman','Felipe','Quinn','Noe','Johann','Adler','Keaton','Mekhi','Bianca','Alanna','Madyson','Javion','Chace','Stanley','Frank','Darnell','Alma','Regan','Sharon','Gerald','Adem','Brenna','Prince','Cory','Darien','Avianna','Larissa','Thaddeus','Aliana','Savanna','Adrienne','Izabelle','Jace','Occupational','Kamden','Dash','Francesca','Vivaan','Grady','Dulce','Rudy','Layton','Rolando','Mckenzie','Arabella','Helen','Adie','Shmuel','Will','Quinton','Jaydon','Payten','Adeline','Quincy','Jaden','Nora','Amelia','African','Madelyn','Pearl','Arely','Saul','   �Kaylynn','Zachery','Moshe','Zavier','Fletcher','Reuben','American','Giovani','Fisher','Zain','Barbara','Isabel','Rylen','Aadi','Davon','Russell','Bruce','Aerith','Saanvi','Spencer','Trade','Madilyn','Jeremias','Roger','Zechariah','Kourtney','Tristan','Latin','Braylen','Aviana','Jagger','Nash','Carlos','Triston','Ronin','Laila','Abdullah','David','Adoncia','Kade','Elsa','Connor','Ayla','Ty','Joziah','Arnav','Yusuf','Isaac','Bobby','Brayson','Admon','Zaire','Dane','Jayceon','Phoebe','Monica','Chase','Maria','Milo','Nathanael','Maverick','Colten','Braden','Guadalupe','Brisa','Piper','Jasiah','Ezra','Acton','Tori','Bethany','Allyson','Princeton','Sutton','Emmett','Norah','Analia','Julianna','Kamari','Leo','Colin','Nicole','Jaelynn','Cooper','Brooklyn','Kailee','William','Andres','Planet','Greyson','Zaniyah','Yosef','Chad','Michael','James','German','Abbigail','Brantley','Judson','Adele','Alison','Uriel','Corey','Kassandra','Milagros','Nathaniel','Iliana','Abra','Brendon','Ana','Elliot','Jovanni','Evie','Victo   �r','Emmalyn','Jemma','Nataly','Cale','Meadow','Aithley','Brent','Stella','Caydence','Ava','Cynthia','Bradley','London','Alexzander','Zion','Breanna','Emmanuel','Paityn','Adila','Kingston','Philip','Cullen','Heaven','Daxton','Owen','Adelina','Kaison','Summer','Anne','Aeryn','Jon','Howard','Braylon','Remy','Keanu','Luciano','Derrick','Finn','Alaric','Sylas','Lucia','Aarav','Isla','Yuliana','Ethen','Jimena','Emiliano','Brian','Anahi','Jakobe','Jamison','Angel','Adeola','Hayleigh','Aubrianna','Brice','Gisselle','Gregory','Kailynn','Hailey','Bennett','Perla','Seamus','Camron','Gannon','Araceli','Mustafa','Wells','Zayden','Aindrea','Stefan','Abdiel','Adelynn','Eden','Kaitlyn','Cristina','Charley','Caden','Declan','Polish','Kayla','Tatiana','Dana','Mya','Kace','Yasmin','Brennen','Mario','Craig','Katelyn','Helena','Frances','Kylen','Ainsley','Lily','Agalia','Brennan','Jewel','Pablo','Miriam','Karlee','Zeke','Beau','Blair','Precious','Patricia','Orlando','Paxton','Jason','Addisyn','Aiyana','Dangelo','Braeden','Eli   �ezer','Miranda','Grayson','Matteo','Christine','Adsila','Hanna','Adalia','Bailey','Heidi','Alessandra','Fiona','Jose','Roderick','Eva','John','Gia','Holden','Bria','Emmet','Richard','Cameron','Camren','Marisol','Jameson','Celtic','Madeline','Adan','Samara','Mara','Kiana','Shawn','Aj','Tyree','Steven','Jorge','Paulina','Austin','Amina','Annabelle','Lathan','Irvin','Soren','Khari','Katherine','Zander','Tessa','Izaiah','Laylah','Sterling','Landyn','Yoselin','Maeve','Jenny','Reyansh','Word','Journey','Gatlin','Aerona','Lydia','Alden','Leslie','Harold','Adonis','Clay','Amara','Lucian','Kenzie','Portuguese','Abby','Ernest','Raina','Giuliana','Santana','Ryland','Kyng','Emilio','Eileen','Kayden','Wendy','Caroline','Averie','Eduardo','Amani','Elliott','Hope','Baylor','Dante','Everett','Brodie','Alexa','Jordy','Priscilla','Irene','Sarah','Roberto','Jamie','Markus','Anika','Esmeralda','Kylah','Bodhi','Reese','Lucille','Leia','Maximilian','Cassandra','Ryann','Judith','Avi','Abrienda','Abdukrahman','Gianna','Haven','A   �idan','Janet','Kassidy','Kyndal','Gracie','Chaya','Ares','Bryant','Ayaan','Jasmin','Greta','Animal','Hayes','Cambria','Scandinavian','Luz','Jase','Madden','Tripp','Ashton','Bradyn','Adalyn','Contemporary','Itzel','Thomas','Rayan','Joaquin','Simone','Jalen','Kara','Wilder','Ali','Ricky','Emery','Donovan','Deon','Alianna','Bo','Luca','Colton','Lilly','Jerome','Drew','Paula','Spanish','Deacon','Lillian','Isaias','Blaze','Alicia','Eliana','Abner','Giovanni','Emma','Libby','Westin','Phillip','Kate','Giovanna','Masen','Conrad','Ezequiel','Teagan','Alagan','Abrielle','Leonardo','Nature','Seth','Acacia','Davian','Lauren','Kolton','Jaylee','Toby','Abie','Adora','Kaiser','Iker','Rogelio','Mark','Ahanu','Kennedy','Ariana','Tabitha','Jay','Samiyah','Kamila','Ellie','Aleena','Valentin','Isiah','Asher','Jaxton','Manuel','Eddie','Ann','Darren','Naomi','Valerie','Sara','Steve','Luis','Rylan','Selena','Johnathan','Bree','Abarne','Sylvia','Lennox','Lindsey','Aleigha','Gavyn','August','Solomon','Kelsey','Kenneth','Bryanna',   �'Ahmad','Aceline','Tyrese','Reid','Sonny','Jorden','Braylin','Adonica','Cain','Osvaldo','Alessandro','Cedric','Deanna','Amirah','Wayne','Jedidiah','Slavic','Gabrielle','Briana','Kase','Leroy','Accalia','Vihaan','Braelynn','Adena','Penelope','Kendrick','Brinley','Janiyah','Aryanna','Jessica','Julius','Lailah','Tyrone','Nevaeh','Carolyn','Rodrigo','Roselyn','Frankie','Fruit','Sofia','Tenley','Norse','Evelyn','Brady','Tianna','Joe','Melany','Brynn','Lila','Keegan','Nikolas','Aryan','Skye','Kolten','Arjun','Joslyn','Sage','Jaylene','Dean','Giovanny','Sebastian','Jayden','Asa','Damarion','Landry','Francisco','and','Brianna','Killian','Legend','Decker','Lawrence','Xavier','Kamryn','Ailsa','Kira','Shayla','Kole','Lennon','Braiden','Kyree','Airlia','Martha','Adelie','Dayton','Aglaia','Pedro','Albert','Miguel','Mathew','Khalid','Trey','Yandel','Adabella','Aydan','Josephine','Leif','Adamina','Erick','Maya','Ralph','Fatima','Kash','Eleanor','Alistair','Bronson','Kyla','Braydon','Jesse','Arianna','Sanaa','Kyler','Log   �an','Harper','Mary','Tommy','Akili','Christina','Ariella','Royce','Makenna','Milana','Ronnie','Kensley','Aditya','Bella','Karis','Elena','Patience','Jenna','Ben','Kenny','Dallas','Wade','Isabella','Maxton','Coleman','Hugh','Aylin','Odin','Dorian','Miah','Aeron','Cade','Aki','Saniya','Kairi','Alia','Delaney','Callan','Lara','Frederick','Evelynn','Emilia','Milania','Sarai','Theo','Anabelle','Mila','Asia','Abbey','Bryan','Wesley','Matilda','Camryn','Lamar','Jaxxon','Daphne','Kaylee','Rey','Harley','Foster','Collin','Adit','Jairo','Harmony','Flower','Gage','Quinten','Nahla','Riya','Leonard','Kenya','Alec','Genesis','Sasha','Taylor','Addilyn','Kaeden','Alayna','Jesus','Dalia','Mauricio','Bridger','Ashley','Joselyn','Adelio','Angelina','Raphael','Emmitt','Chance','Madisyn','Ethan','Callum','Cayden','Liana','Aubrey','Yahir','Maxim','Dennis','Joy','Marissa','Alejandro','Eugene','Ailis','Whitney','Yazmin','Levi','Julio','Gaige','Hungarian','Jayde','Juliet','Kyra','Jennifer','Van','Lisa','Alvin','Miracle','Pierre',   �'Mohammad','Zoey','Huxley','Jayson','Willie','Jonah','Esteban','Hunter','Duke','Presidential','Douglas','Waylon','Alannis','Hadassah','Dariel','Brycen','Kallie','Cannon','Conner','Adara','Caiden','Emilee','Ashlynn','Heather','Kye','Tatum','Rosa','Adelyn','Campbell','Tyler','Aislin','Aaron','Nia','Stetson','Chris','Katelynn','Kathryn','Lee','Tess','Lyle','Shakespearean','Reign','Devon','Jillian','Broderick','Daniela','Alan','Leighton','Duncan','Nancy','Cassidy','Michaela','Paris','Thiago','April','Kane','Sophie','Annabella','Alabama','Benton','Mathias','Rebekah','Clara','Wyatt','Brentley','Alondra','Brett','Kaliyah','Akilah','Ivy','Lewis','Alissa','Sky','Emory','Aisha','Carson','Weston','Dario','Giana','Terry','Hazel','Yamilet','Merrick','Juliette','Musa','Dahlia','Literary','Jonathon','Angie','Ainslie','Avah','Jeramiah','Madalyn','Addyson','Corbin','Mercedes','Izabella','Harlow','Darrell','Raylan','Ada']); function randomWords(words, txtArray) { var result = ''; for (var i = words; i > 0; --i) result += t   �xtArray[Math.floor(Math.random()*txtArray.length)]; return result; }\") \n";
    openParams += "SET !VAR3 EVAL(\"randomWords(1, ['outlook.com','hotmail.com','live.com']); function randomWords(words, txtArray) { var result = ''; for (var i = words; i > 0; --i) result += txtArray[Math.floor(Math.random()*txtArray.length)]; return result; }\") \n";
    openParams += "SET !VAR4 EVAL(\"randomWords(1, ['Internet<SP>Service<SP>Provider<SP>(ISP)','Windows<SP>Live<SP>Hotmail<SP>Customer','Business<SP>(non-marketing)','Social<SP>Networking']); function randomWords(words, txtArray) { var result = ''; for (var i = words; i > 0; --i) result += txtArray[Math.floor(Math.random()*txtArray.length)]; return result; }\") \n";
    
    openParams += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form-submit ATTR=ID:IssueTitleInput CONTENT=\"{[TITLE]}\" \n";
    openParams += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form-submit ATTR=ID:SMCQuickFormOutlookSenderWhitelistingContactName CONTENT={{!VAR1}}<SP>{{!VAR2}} \n";
    openParams +=    �"TAG POS=1 TYPE=SELECT FORM=ID:form-submit ATTR=ID:SMCQuickFormOutlookSenderWhitelistingWhatdomainareyousendingto CONTENT=%{{!VAR3}} \n";
    openParams += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:form-submit ATTR=ID:SMCQuickFormOutlookSenderWhitelistingContactemailaddress CONTENT=\"{[EMAIL]}\" \n";
    openParams += "TAG POS=1 TYPE=SELECT FORM=ID:form-submit ATTR=ID:TimeZoneDropdown CONTENT=%Central<SP>America<SP>Standard<SP>Time \n";
    openParams += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form-submit ATTR=ID:SMCQuickFormOutlookSenderWhitelistingWhatdomainareyousendingfrom CONTENT=\"{[SUBDOMAIN]}\" \n";
    openParams += "TAG POS=1 TYPE=SELECT FORM=ID:form-submit ATTR=ID:SMCQuickFormOutlookSenderWhitelistingHowwouldyoudescribeyourcompanyoryourself CONTENT=%{{!VAR4}} \n";
    openParams += "TAG POS=1 TYPE=TEXTAREA FORM=ID:form-submit ATTR=ID:SMCQuickFormOutlookSenderWhitelistingOutboundIPsorranges CONTENT=\"{[IP]}\" \n";
    openParams += "TAG POS=1 TYPE=SELECT FORM=ID:form-submit ATTR=ID:SMCQuickFormOutloo    kSenderWhitelistingIsyourserverdedicatedorshared CONTENT=%Dedicated \n";
    openParams += "TAG POS=1 TYPE=TEXTAREA FORM=ID:form-submit ATTR=ID:SMCQuickFormOutlookSenderWhitelistingCopyandpasteanyerrormessages CONTENT=\"{[MESSAGE]}\" \n";
    openParams += "TAG POS=1 TYPE=TEXTAREA FORM=ID:form-submit ATTR=ID:SMCQuickFormOutlookSenderWhitelistingProvidetheURLofyourwebsite CONTENT=\"{[DOMAIN]}\" \n";
    openParams += "WAIT SECONDS=3\n";
    openParams += "TAG POS=1 TYPE=BUTTON FORM=ID:form-submit ATTR=ID:form-submit-button \n";
    openParams += "WAIT SECONDS=8\n";
    openParams += "TAB CLOSE \n";

    iimPlay(openParams);
}
else
{
    openParams = agentproxy;
    openParams += "SET !TIMEOUT_PAGE 10\n";
    openParams += "SET !TIMEOUT_STEP 2\n";
    openParams += "ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
    openParams += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=delisting_error_hotmail.txt\n";
    openParams += "TAB CLOSE\n"
    iimPlay(openParams);  
}desktop    l  l                                                                                                  ��` [��7HOTMAILDELISTINGTITLE/EMAIL/IP/DOMAIN/SUBDOMAIN/MESSAGEvar openParams,agentproxy,agentproxy2;
agentproxy   = "CODE:SET !ERRORIGNORE YES \n";
agentproxy  += '{[AGENT]} \n';
agentproxy  += "{[PROXY_IP]} \n";
agentproxy  += '{[PROXY_LOGIN]} \n';

agentproxy2  = "CODE:";
agentproxy2 += '{[AGENT]} \n';
agentproxy2 += "{[PROXY_IP]} \n";
agentproxy2 += '{[PROXY_LOGIN]} \n';

openParams  = agentproxy;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "SET !WAITPAGECOMPLETE YES\n";
openParams += "URL GOTO=https://support.microsoft.com/en-us/supportrequestform/8ad563e3-288e-2a61-8122-3ba03d6b8d75 \n";
openParams += "WAIT SECONDS=1\n";
openParams += "TAB CLOSEALLOTHERS\n";
openParams += "WAIT SECONDS=10\n";
iimPlay(openParams);

var macroTest = agentproxy;
macroTest +="SET !EXTRACT null\n";
macroTest +="SET !EXTRACT {{!URLCURRENT}}\n";
macroTest +="wai   u   �[AGENT]} \n';
agentproxy  += "{[PROXY_IP]} \n";
agentproxy  += '{[PROXY_LOGIN]} \n';
agentproxy  += "SET !TIMEOUT_PAGE 10 \n";
agentproxy  += "SET !TIMEOUT_STEP 2 \n";

agentproxy2  = "CODE:";
agentproxy2 += '{[AGENT]} \n';
agentproxy2 += "{[PROXY_IP]} \n";
agentproxy2 += '{[PROXY_LOGIN]} \n';
agentproxy2 += "SET !TIMEOUT_PAGE 10 \n";
agentproxy2 += "SET !TIMEOUT_STEP 2 \n";

openParams     = agentproxy;
openParams    += "TAB OPEN \n";
openParams    += "TAB T=2\n";
openParams    += "TAB CLOSEALLOTHERS\n";
openParams    += "URL GOTO=https://outlook.live.com/people/ \n";
openParams    += "WAIT SECONDS=10 \n";  
iimPlay(openParams);

var macroTest = agentproxy;
macroTest +="SET !EXTRACT null\n";
macroTest +="SET !EXTRACT {{!URLCURRENT}}\n";
macroTest +="wait seconds=1\n";
iimPlay(macroTest);
var currurl=iimGetLastExtract();
if (currurl.includes("https://outlook.live.com/people"))
{  
    openParams  = agentproxy;
    openParams += "SET !TIMEOUT_PAGE 10 \n";
    openParams += "S    ET !TIMEOUT_STEP 2 \n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=NAME:Manage \n";
    openParams += "WAIT SECONDS=4 \n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=NAME:Import<SP>contacts \n";
    openParams += "WAIT SECONDS=5 \n";
    openParams += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={[PATHFILE]} \n";
    openParams += "WAIT SECONDS=5 \n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Import \n";
    openParams += "WAIT SECONDS=20 \n";
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Close \n";
    openParams += "WAIT SECONDS=2\n";
    openParams +="TAB CLOSE \n";
    iimPlay(openParams);
}  
else  
{  
    openParams = agentproxy;
    openParams += "SET !TIMEOUT_PAGE 10\n";
    openParams += "SET !TIMEOUT_STEP 2\n";
    openParams += "ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
    openParams += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=addcontact_error_hotmail.txt\n";
    openParams += "TAB CLOSE\n"
    iimPlay(openParams);  
   } desktop    & ` &                          �7
 '�)HOTMAILDELISTING 365IPvar openParams,agentproxy,agentproxy2;
agentproxy   = "CODE:SET !ERRORIGNORE YES \n";
agentproxy  += '{[AGENT]} \n';
agentproxy  += "{[PROXY_IP]} \n";
agentproxy  += '{[PROXY_LOGIN]} \n';

agentproxy2  = "CODE:";
agentproxy2 += '{[AGENT]} \n';
agentproxy2 += "{[PROXY_IP]} \n";
agentproxy2 += '{[PROXY_LOGIN]} \n';

openParams = agentproxy;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "SET !WAITPAGECOMPLETE YES\n";
openParams += " URL GOTO=https://sender.office.com/ \n";
openParams += "WAIT SECONDS=1\n";
openParams += "TAB CLOSEALLOTHERS\n";
openParams += "WAIT SECONDS=8\n";
openParams += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/Delist/HandleHIP ATTR=ID:IP CONTENT={[IP]} \n";
openParams += "WAIT SECONDS=2\n";
iimPlay(openParams);	desktop�
 #�UHOTMAILADD CONTACTPATHFILEvar openParams, result, agentproxy, agentproxy2;

agentproxy   = "CODE:SET !ERRORIGNORE YES \n";
agentproxy  += '{   �   �S\n";
openParams += "URL GOTO = https://login.yahoo.com/?.src=ym&pspid=1197806870&activity=header-signin&.lang=en-US&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2Fd \n";
openParams += "WAIT SECONDS=6 \n";  
openParams += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:login-username-form ATTR=NAME:username CONTENT=\"{[EMAIL]}\"\n";
openParams += "WAIT SECONDS=1\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#login-signin\" BUTTON=0\n";
openParams += "WAIT SECONDS=6\n";
iimPlay(openParams);

var macroTest = agentproxy2;
macroTest += "TAG POS=1 TYPE=IFRAME ATTR=ID:recaptcha-iframe \n";
if(iimPlay(macroTest) > 0)
{
    iimPlay("CODE: PAUSE");
}

openParams = statics;
openParams += "SET !ENCRYPTION NO\n";
openParams += "TAG POS=1 TYPE=INPUT:PASSWORD ATTR=ID:login-passwd CONTENT=\"{[PASSWORD]}\"\n";
openParams += "WAIT SECONDS=1.5\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#login-signin\" BUTTON=0\n";
openParams += "WAIT SECONDS=2\n";
openParams += "TAG POS=1 TYPE=A ATTR=CLASS:txt-align-center<sp>    escape-hatch<sp>refresher-submit\n";
openParams += "WAIT SECONDS=4\n";
openParams += "URL GOTO=https://mail.yahoo.com/b/folders/1 \n";
openParams += "WAIT SECONDS=5\n";
openParams += "TAG POS=1 TYPE=A ATTR=TXT:Continue\n";
openParams += "WAIT SECONDS=10\n";
iimPlay(openParams);

macroTest = agentproxy2;
macroTest += "TAG XPATH=\"(//div[contains(@class,'a_3PTrg s_3vjv5 o_h V_M')])[1]\" \n";
if(iimPlay(macroTest)>0)
{
    var Found=statics;
    Found += "SET !ERRORIGNORE YES\n";
    Found += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]}\n";
  Found += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=open_success_yahoo.txt\n";
    Found+= "TAB CLOSE\n"
    iimPlay(Found);
}
else
{
    var NotFound=statics;
  NotFound+="SET !ERRORIGNORE YES\n";
    NotFound+="ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]}\n";
  NotFound+="SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=open_error_yahoo.txt\n";
    NotFound += "TAB CLOSE\n";
    iimPlay(NotFound);
}desktop    � : �                                                                                                                                                                                                                             %	 )YAHOOREPORTING SPAMdesktop&	 +YAHOOREPORTING INBOXdesktop�7
 !M�wYAHOOOPEN SEEDSEMAIL/PASSWORD/IP:PORT:USER:PASSvar statics   = "CODE:";
statics      += "SET !ERRORIGNORE YES \n";
statics    += '{[AGENT]}\n';
statics      += "SET !TIMEOUT_STEP 5 \n";
statics      += "SET !TIMEOUT_PAGE 2 \n";
statics    += "{[PROXY_IP]} \n";
statics    += '{[PROXY_LOGIN]} \n'; 

var agentproxy2    = "CODE:";
agentproxy2     += '{[AGENT]}\n';
agentproxy2       += "SET !TIMEOUT_STEP 5 \n";
agentproxy2       += "SET !TIMEOUT_PAGE 2 \n";
agentproxy2     += "{[PROXY_IP]} \n";
agentproxy2 += '{[PROXY_LOGIN]} \n'; 

var openParams = statics;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "CLEAR \n";
openParams += "TAB CLOSEALLOTHER   �   �//login.yahoo.com/?.src=ym&pspid=1197806870&activity=header-signin&.lang=en-US&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2Fd \n";
openParams += "WAIT SECONDS=5\n";
openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"#login-username\" CHARS=\"{[EMAIL]}\"\n";
openParams += "WAIT SECONDS=1\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#login-signin\" BUTTON=0\n";
openParams += "WAIT SECONDS=2\n";
openParams += "SET !ENCRYPTION NO\n";
openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"#login-passwd\" CHARS=\"{[OLD_PASSWORD]}\"\n";
openParams += "WAIT SECONDS=1.5\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#login-signin\" BUTTON=0\n";
openParams += "WAIT SECONDS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#app>DIV:nth-of-type(7)>DIV>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON =0\n";
openParams += "WAIT SECONDS=6\n";
openParams += "URL GOTO =https://mail.yahoo.com/b/folders/1 \n";
openParams += "WAIT SECONDS=6\n";
openParams += "TAG POS=1 TYPE=A ATTR=TXT:Continue\n";
iimPlay(openParams);

res   �ult = null;  
openParams  = agentproxy2;  
openParams += "TAG XPATH=\"(//div[contains(@class,'a_3PTrg s_3vjv5 o_h V_M')])[1]\" \n";  
result = iimPlay(openParams);  
if (result > 0)  
{  
     openParams  = agentproxy;
     openParams += "TAB OPEN \n";
     openParams += "TAB T=2\n";
     openParams += "URL GOTO =https://login.yahoo.com/myaccount/security/ \n";
     openParams += "WAIT SECONDS=2\n";
     openParams += "TAB CLOSEALLOTHERS\n";
     openParams += "WAIT SECONDS=5\n";
     openParams += "TAG POS=1 TYPE=A ATTR=TXT:Change<SP>password\n";
     openParams += "WAIT SECONDS=3\n";
     openParams += "EVENT TYPE=CLICK SELECTOR=\"#recaptcha-anchor>DIV\" BUTTON=0\n";
     openParams += "WAIT SECONDS=2\n";
     openParams += "EVENT TYPE=CLICK SELECTOR=\"#recaptcha-submit\" BUTTON=0\n";
     openParams += "WAIT SECONDS=5\n";
     openParams += "SET !ENCRYPTION NO\n";
     openParams += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:password CONTENT={[NEW_PASSWORD]} \n";    
     openParams += "WAIT SECONDS=1\n";
     openParams += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*\n";
     openParams += "WAIT SECONDS=6\n";
     openParams += "TAG POS=1 TYPE=A ATTR=TXT:Continue \n";
     openParams += "WAIT SECONDS=6 \n";
     openParams += "TAG POS=1 TYPE=BUTTON FORM=ACTION:/account/comm-channel/refresh?ctx=cpwsuccess&done=https%3A%2F%2Flogin.yahoo.com%2Fmyaccount%2Fsecurity%2F%3F.scrumb%3DSaGRu6ffx8Q%26guccounter%3D1&scrumb=cBLM0ASowLt ATTR=NAME:confirmCommChannels \n";
     openParams += "WAIT SECONDS=60\n";
     openParams += "TAB CLOSE\n";
     iimPlay(openParams);
}  
else  
{  
     openParams  = agentproxy;
     openParams += "SET !ERRORIGNORE YES\n";
     openParams += "ADD !EXTRACT {[EMAIL]},{[OLD_PASSWORD]},{[NEW_PASSWORD]},{[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
     openParams += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=changepassword_error_yahoo.txt\n";
     openParams += "TAB CLOSE\n";
     iimPlay(openParams);  
}desktop   d d                                                                                                                                                                                                                                                                                                                                                          �	
 +K�YAHOOCHANGE PASSWORDEMAIL/OLD_PASSWORD/NEW_PASSWORDvar openParams, result,agentproxy,agentproxy2;
agentproxy   = "CODE:SET !ERRORIGNORE YES \n";
agentproxy  += '{[AGENT]} \n';
agentproxy  += "{[PROXY_IP]} \n";
agentproxy  += '{[PROXY_LOGIN]} \n';

agentproxy2  = "CODE:";
agentproxy2 += '{[AGENT]} \n';
agentproxy2 += "{[PROXY_IP]} \n";
agentproxy2 += '{[PROXY_LOGIN]} \n';

openParams  = agentproxy;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";
openParams += "SET !TIMEOUT_PAGE 10 \n";
openParams += "SET !TIMEOUT_STEP 2 \n";
openParams += "CLEAR \n";
openParams += "URL GOTO =https:   �     null;  
openParams  = agentproxy2;  
openParams += "TAG XPATH=\"(//div[contains(@class,'a_3PTrg s_3vjv5 o_h V_M')])[1]\" \n";  
result = iimPlay(openParams);  
if (result > 0)  
{  
  openParams  = agentproxy;
  openParams += "TAB OPEN \n";
  openParams += "TAB T=2 \n";
  openParams += "WAIT SECONDS=5\n";
  openParams += "URL GOTO=https://login.yahoo.com/account/preferences \n";
  openParams += "WAIT SECONDS=1\n";
  openParams += "TAB CLOSEALLOTHERS\n";
  openParams += "WAIT SECONDS=4\n";
  openParams += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:preferenceLang CONTENT=%en-US \n";
  openParams += "WAIT SECONDS=8\n";
  openParams += "TAB CLOSE\n";
  iimPlay(openParams);
}  
else  
{  
      openParams  = agentproxy;
      openParams += "ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
      openParams += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=changelanguage_error_yahoo.txt\n";
      openParams += "TAB CLOSE\n";
      iimPlay(openParams);  
}desktop    � 
 �                                                                                                                                                �k
 _U�YAHOOCHANGE ALL (LANGUAGE, PASSWORD, RECOVERY)EMAIL/OLD_PASS/NEW_PASS/NEW_RECOVERYvar openPar   ��k
 +�YAHOOCHANGE LANGUAGEvar openParams, result,agentproxy,agentproxy2;
agentproxy   = "CODE:SET !ERRORIGNORE YES \n";
agentproxy  += '{[AGENT]} \n';
agentproxy  += "{[PROXY_IP]} \n";
agentproxy  += '{[PROXY_LOGIN]} \n';

agentproxy2  = "CODE:";
agentproxy2 += '{[AGENT]} \n';
agentproxy2 += "{[PROXY_IP]} \n";
agentproxy2 += '{[PROXY_LOGIN]} \n';


openParams  = agentproxy;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "SET !TIMEOUT_PAGE 15 \n";
openParams += "SET !TIMEOUT_STEP 1 \n";
openParams += "URL GOTO=https://mail.yahoo.com/b/folders/folders=1 \n";
openParams += "WAIT SECONDS=2 \n";
openParams += "TAB CLOSEALLOTHERS\n";
openParams += "WAIT SECONDS=6 \n";
iimPlay(openParams);

result =   �   �ams, result,agentproxy,agentproxy2,changepassword;

agentproxy   = "CODE:SET !ERRORIGNORE YES \n";
agentproxy  += '{[AGENT]} \n';
agentproxy  += "{[PROXY_IP]} \n";
agentproxy  += '{[PROXY_LOGIN]} \n';

agentproxy2  = "CODE:";
agentproxy2 += '{[AGENT]} \n';
agentproxy2 += "{[PROXY_IP]} \n";
agentproxy2 += '{[PROXY_LOGIN]} \n';


openParams  = agentproxy;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";
openParams += "SET !TIMEOUT_PAGE 10 \n";
openParams += "SET !TIMEOUT_STEP 2 \n";
openParams += "CLEAR \n";
openParams += "URL GOTO =https://login.yahoo.com/?.src=ym&pspid=1197806870&activity=header-signin&.lang=en-US&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2Fd \n";
openParams += "WAIT SECONDS=10\n";
openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"#login-username\" CHARS=\"{[EMAIL]}\"\n";
openParams += "WAIT SECONDS=1\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#login-signin\" BUTTON=0\n";
openParams += "WAIT SECONDS=2\n";
openParams   � += "SET !ENCRYPTION NO\n";
openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"#login-passwd\" CHARS=\"{[OLD_PASS]}\"\n";
openParams += "WAIT SECONDS=1.5\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#login-signin\" BUTTON=0\n";
openParams += "WAIT SECONDS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#app>DIV:nth-of-type(7)>DIV>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON =0\n";
openParams += "WAIT SECONDS=6\n";
openParams += "URL GOTO =https://mail.yahoo.com/b/folders/1 \n";
openParams += "WAIT SECONDS=3\n";
openParams += "TAG POS=1 TYPE=A ATTR=TXT:Continue\n";
openParams += "WAIT SECONDS=3\n";
iimPlay(openParams);

result = null;  
openParams  = agentproxy2;  
openParams += "TAG XPATH=\"(//div[contains(@class,'a_3PTrg s_3vjv5 o_h V_M')])[1]\" \n";  
result = iimPlay(openParams);  
if (result > 0)  
{  
     changepassword  = agentproxy;
     changepassword += "TAB OPEN \n";
     changepassword += "TAB T=2 \n";
     changepassword += "TAB CLOSEALLOTHERS\n";
     changepassword += "U   �RL GOTO =https://login.yahoo.com/myaccount/security/ \n";
     changepassword += "WAIT SECONDS=6\n";
     changepassword += "TAG POS=1 TYPE=A ATTR=TXT:Change<SP>password\n";
     changepassword += "WAIT SECONDS=3\n";
     changepassword += "EVENT TYPE=CLICK SELECTOR=\"#recaptcha-anchor>DIV\" BUTTON=0\n";
     changepassword += "WAIT SECONDS=2\n";
     changepassword += "EVENT TYPE=CLICK SELECTOR=\"#recaptcha-submit\" BUTTON=0\n";
     changepassword += "WAIT SECONDS=5\n";
     changepassword += "SET !ENCRYPTION NO\n";
     changepassword += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:password CONTENT={[NEW_PASS]} \n";
     changepassword += "WAIT SECONDS=1\n";
     changepassword += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*\n";
     changepassword += "WAIT SECONDS=6\n";
     changepassword += "TAG POS=1 TYPE=A ATTR=TXT:Continue \n";
     changepassword += "WAIT SECONDS=6 \n";
     changepassword += "TAG POS=1 TYPE=BUTTON FORM=ACTION:/account/comm-channel/ref   �resh?ctx=cpwsuccess&done=https%3A%2F%2Flogin.yahoo.com%2Fmyaccount%2Fsecurity%2F%3F.scrumb%3DSaGRu6ffx8Q%26guccounter%3D1&scrumb=cBLM0ASowLt ATTR=NAME:confirmCommChannels \n";
     changepassword += "WAIT SECONDS=10\n";

     var changelanguage = agentproxy;
     changelanguage    += "TAB OPEN \n";
     changelanguage    += "TAB T=2 \n";
     changelanguage    += "TAB CLOSEALLOTHERS\n";
     changelanguage    += "URL GOTO=https://login.yahoo.com/account/preferences \n";
     changelanguage    += "WAIT SECONDS=4\n";
     changelanguage    += "TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:preferenceLang CONTENT=%en-US \n";
     changelanguage    += "WAIT SECONDS=8\n";

     var changerecevery = agentproxy;
     changerecevery += "TAB OPEN \n";
     changerecevery += "TAB T=2 \n";
     changerecevery += "TAB CLOSEALLOTHERS\n";
     changerecevery += "URL GOTO=https://login.yahoo.com/myaccount/security/ \n";
     changerecevery += "WAIT SECONDS=4\n";
     changerecevery += "TAG POS=1    �TYPE=A ATTR=TXT:Edit\n";
     changerecevery += "WAIT SECONDS=6\n";
     changerecevery += "TAG POS=2 TYPE=BUTTON FORM=ACTION:/account/comm-channel/refresh?done=https%3A%2F%2Flogin.yahoo.com%2Fmyaccount%2Fsecurity%2F%3F.scrumb%3DiVlBrvOvBN%252F%26guccounter%3D1&scrumb=iVlBrvOvBN%2F ATTR=NAME:editCommChannel\n";
     changerecevery += "WAIT SECONDS=3\n";
     changerecevery += "TAG POS=1 TYPE=A ATTR=TXT:Remove<SP>from<SP>my<SP>account\n";
     changerecevery += "WAIT SECONDS=2\n";
     changerecevery += "TAG POS=1 TYPE=BUTTON FORM=ACTION:https://login.yahoo.com/account/comm-channel/update/emails?done=https%3A%2F%2Flogin.yahoo.com%2Fmyaccount%2Fsecurity%2F%3F.scrumb%3DiVlBrvOvBN%252F%26guccounter%3D1&scrumb=iVlBrvOvBN%2F ATTR=NAME:removeCommChannel\n";
     changerecevery += "WAIT SECONDS=4\n";
     changerecevery += "EVENT TYPE=CLICK SELECTOR=\"#root>DIV>DIV:nth-of-type(3)>DIV>SECTION:nth-of-type(2)>DIV:nth-of-type(2)>UL>LI>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>A\" BUTTON=0 \n";
     changerec    every += "WAIT SECONDS=4\n";
     changerecevery += "EVENTS TYPE=KEYPRESS SELECTOR=\"#comm-channel\" CHARS=\"{[NEW_RECOVERY]}\" \n";
     changerecevery += "WAIT SECONDS=2\n";
     changerecevery += "EVENT TYPE=CLICK SELECTOR=\"#login-body>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>FORM>DIV>DIV>DIV:nth-of-type(3)>BUTTON\" BUTTON=0 \n";
     changerecevery += "WAIT SECONDS=60\n";
     changerecevery += "TAB CLOSE\n";

     iimPlay(changelanguage);
     iimPlay(changepassword);
     iimPlay(changerecevery);
}  
else  
{  
     openParams  = agentproxy;
     openParams += "SET !ERRORIGNORE YES\n";
     openParams += "ADD !EXTRACT {[EMAIL]},{[OLD_PASS]},{[NEW_PASS]},{[NEW_RECOVERY]},{[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
     openParams += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=changeall_error_yahoo.txt\n";
     openParams += "TAB CLOSE\n"
     iimPlay(openParams);  
}desktop                                                                                                       �     += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 5 \n";
initGlobal   += "SET !TIMEOUT_PAGE 2 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal       += "{[PROXY_IP]} \n";
initGlobal       += '{[PROXY_LOGIN]} \n'; 

macrolist  = initGlobal;
macrolist += "TAB T=1 \n";
macrolist += "TAB CLOSEALLOTHERS \n";
macrolist += "CLEAR \n";
macrolist += "WAIT SECONDS = 1 \n";
macrolist += "URL GOTO=https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp \n";
macrolist += "WAIT SECONDS = 8 \n";
macrolist += 'TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:firstName CONTENT="{[FNAME]}" \n';
macrolist += "WAIT SECONDS = 2 \n";
macrolist += 'TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:lastName CONTENT="{[LNAME]}" \n';
macrolist += "WAIT SECONDS = 3 \n";
macrolist += 'TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=ID:username CONTENT="{[USER]}" \n';
macrolist += "WAIT SECONDS = 1 \n";
macrolist += 'TAG POS=1 TYPE=   �INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:Passwd CONTENT="{[PASS]}" \n';
macrolist += "WAIT SECONDS = 2 \n";
macrolist += 'TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:ConfirmPasswd CONTENT="{[PASS]}" \n';
macrolist += "WAIT SECONDS = 3 \n";
macrolist += "TAG POS=2 TYPE=DIV ATTR=class:VfPpkd-Jh9lGc\n";
macrolist += "WAIT SECONDS = 4 \n";
macrolist += "SET !EXTRACT null \n";
macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Verify<SP>your<SP>phone<SP>number EXTRACT=TXT \n";
iimPlay(macrolist);
var res = iimGetLastExtract();
if (res.includes("Verify your phone number"))
{
  macrolist    = initGlobal;
  macrolist += "WAIT SECONDS = 3 \n";
  macrolist += 'TAG POS=1 TYPE=INPUT:TEL FORM=NAME:NoFormName ATTR=ID:phoneNumberId CONTENT="{[PHONE]}" \n';
  iimPlay(macrolist);
}

macrolist = initGlobal; 
macrolist += "WAIT SECONDS = 1 \n";
macrolist += "PAUSE \n";
iimPlay(macrolist);

macrolist = initGlobal; 
macrolist += "WAIT SECONDS = 1 \n";
macrolist += "SET !EXTRACT null \n";   �
macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:*<SP>welcome<SP>to<SP>Google EXTRACT=TXT \n";
macrolist += "WAIT SECONDS = 1 \n";
iimPlay(macrolist);
var res = iimGetLastExtract();
if (res.includes(" welcome to Google"))
{
        macrolist = initGlobal; 
        macrolist += "WAIT SECONDS = 2 \n";
        macrolist += 'TAG POS=1 TYPE=INPUT:TEL FORM=NAME:NoFormName ATTR=ID:phoneNumberId CONTENT="{[PHONE]}" \n';
        macrolist += "WAIT SECONDS = 3 \n";
        macrolist += 'TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=NAME:recoveryEmail CONTENT="{[RECOVERY]}" \n';
        macrolist += "WAIT SECONDS = 2 \n";
        macrolist +=  'SET !VAR1 EVAL("var randomNumber=Math.floor(Math.random()*30 + 1); randomNumber;") \n';
        macrolist +=  'TAG POS=1 TYPE=INPUT ATTR=ID:day CONTENT={{!VAR1}}  \n';
        macrolist += "WAIT SECONDS = 1 \n";
        macrolist +=  'SET !VAR2 EVAL("var randomNumber=Math.floor(Math.random()*15 + 1985); randomNumber;") \n';
        macrolist +=  'TAG POS=1    �TYPE=INPUT ATTR=ID:year CONTENT={{!VAR2}} \n';
        macrolist += "WAIT SECONDS = 2 \n";
        macrolist +=  'SET !VAR3 EVAL("var randomNumber=Math.floor(Math.random()*11 + 1); randomNumber;") \n';
        macrolist +=  'TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:month CONTENT=%{{!VAR3}} \n';
        macrolist += "WAIT SECONDS = 1 \n";
        macrolist +=  'SET !VAR4 EVAL("var randomNumber=Math.floor(Math.random()*3 + 1); randomNumber;") \n';
        macrolist +=  'TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:gender CONTENT=%{{!VAR4}} \n';
        macrolist += "WAIT SECONDS = 3 \n";
        macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Next \n";
        macrolist += "WAIT SECONDS = 4 \n";
        macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Skip \n";
        macrolist += "WAIT SECONDS = 3 \n";
        macrolist += "TAG POS=1 TYPE=DIV ATTR=ID:selectionc11 \n";
        macrolist += "WAIT SECONDS = 5 \n";
        macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Next \n";
        macrol   �ist += "WAIT SECONDS = 3 \n";
        macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Confirm \n";
        macrolist += "WAIT SECONDS = 4 \n";
        macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:I<SP>agree \n";
        macrolist += "WAIT SECONDS = 5 \n";
        macrolist += "URL GOTO=https://www.google.com \n";
        macrolist += "WAIT SECONDS = 4 \n";
        macrolist += "TAG POS=1 TYPE=a ATTR=CLASS:gb_f&&TXT:Gmail \n";
        macrolist += "WAIT SECONDS = 9 \n";
        macrolist += "TAG POS=1 TYPE=DIV ATTR=TXT:Continue<SP>with<SP>smart<SP>features \n";
        macrolist += "WAIT SECONDS = 1 \n";
        macrolist += "TAG POS=1 TYPE=BUTTON ATTR=NAME:data_consent_dialog_next \n";
        macrolist += "WAIT SECONDS = 1 \n";
        macrolist += "TAG POS=1 TYPE=DIV ATTR=TXT:Personalize<SP>other<SP>Google<SP>products* \n";
        macrolist += "WAIT SECONDS = 1 \n";
        macrolist += "TAG POS=1 TYPE=BUTTON ATTR=NAME:data_consent_dialog_done \n";
        macrolist += "WAIT SECONDS = 2 \n";
            macrolist += "TAG POS=1 TYPE=BUTTON ATTR=CLASS:J-at1-auR&&NAME:r \n";
        macrolist += "WAIT SECONDS = 5 \n";
        macrolist += "SET !EXTRACT null \n";
        macrolist += "TAG POS=1 TYPE=SPAN ATTR=TXT:Something<SP>went<SP>wrong EXTRACT=TXT \n";
        iimPlay(macrolist);

        var res8 = iimGetLastExtract();
        if (res8.includes(" Something went wrong"))
        {
                macrolist = initGlobal; 
                macrolist += "TAB Close \n";
                iimPlay(macrolist);
        }
  
        macrolist = initGlobal; 
        macrolist += "WAIT SECONDS = 2 \n";
        macrolist += "ADD !EXTRACT {[USER]},{[PASS]},{[RECOVERY]},{[FNAME]},{[LNAME]},{[PHONE]}\n";
        macrolist += "SAVEAS TYPE=EXTRACT FOLDER=C:\\{[PC_USER]}\\Documents\\iMacros\\Datasources FILE=created_account_gmail.txt \n";
        macrolist += "WAIT SECONDS = 1 \n";
        iimPlay(macrolist);
}

macrolist = initGlobal; 
macrolist += "TAB Close \n";
iimPlay(macrolist);desktop   # J�#                                                                                                                                                                                                                                                                                     �
 #�QNEWSLETTERSFMOEMAILvar initGlobal2 = "CODE:";
initGlobal2    += "SET !ERRORIGNORE YES \n";
   ��.
 #/�NEWSLETTERSACTIVEEMAIL/FNAME/LNAMEvar initGlobal = "CODE:";
initGlobal    += "SET !ERRORIGNORE YES \n";
initGlobal    += '{[AGENT]}\n';
initGlobal    += "SET !TIMEOUT_STEP 5 \n";
initGlobal    += "SET !TIMEOUT_PAGE 2 \n";
initGlobal    += "SET !WAITPAGECOMPLETE YES\n";
initGlobal    += "{[PROXY_IP]} \n";
initGlobal    += '{[PROXY_LOGIN]} \n'; 

var GeniMail  = initGlobal;
GeniMail += "TAB T=1 \n"; 
GeniMail +=   ��
 +U�%GMAILCREATE BOX ONLYFNAME/LNAME/USER/PASS/RECOVERY/PHONEvar profile,macrolist;

var initGlobal = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal     �     "TAB CLOSEALLOTHERS \n";
GeniMail += "URL GOTO=https://www.active.com/newsletters \n";
GeniMail += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:newsletter-page ATTR=NAME:email CONTENT={[EMAIL]} \n"; 
GeniMail += "WAIT SECONDS=3 \n";
GeniMail += "TAG XPATH=//a[@class='selectboxit-option-anchor'][contains(.,'Germany')] \n";
GeniMail += "WAIT SECONDS=3 \n";
GeniMail += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:newsletter-page ATTR=NAME:zip CONTENT= 40000 \n";
GeniMail += "WAIT SECONDS=3 \n";
GeniMail += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:newsletter-page ATTR=NAME:last_name CONTENT={[FNAME]} \n";
GeniMail += "WAIT SECONDS=3 \n";
GeniMail += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:newsletter-page ATTR=NAME:first_name CONTENT={[LNAME]} \n";
GeniMail += "TAG XPATH=//a[contains(@name,'local-events')] \n" ;
GeniMail += "TAG XPATH=//a[contains(@name,'insider')] \n"; 
GeniMail += "TAG POS=1 TYPE=BUTTON FORM=ID:newsletter-page ATTR=TXT:Save<SP>Email<SP>Preferences \n";
GeniMail += "CLEAR  \n";

iimPlay(GeniMail);desktop    initGlobal2    += '{[AGENT]}\n';
initGlobal2    += "SET !TIMEOUT_STEP 5 \n";
initGlobal2    += "SET !TIMEOUT_PAGE 2 \n";
initGlobal2    += "SET !WAITPAGECOMPLETE YES\n";
initGlobal2    += "{[PROXY_IP]} \n";
initGlobal2    += '{[PROXY_LOGIN]} \n'; 

var GeniMail2  = initGlobal2;
GeniMail2 += "TAB T=1 \n";
GeniMail2 += "TAB CLOSEALLOTHERS \n";
GeniMail2 += "URL GOTO=https://www.fmo.nl/newsletter-subscription \n";
GeniMail2 += "Wait Seconds=5 \n";
GeniMail2 += "TAG XPATH=//input[@type='email'] CONTENT={[EMAIL]} \n";
GeniMail2 += "Wait Seconds=2 \n";
GeniMail2 += "TAG XPATH=(//input[@type='text'])[2] CONTENT=Geni \n";
GeniMail2 += "Wait Seconds=2 \n";
GeniMail2 += "TAG XPATH=(//input[contains(@type,'text')])[4] CONTENT=Mail \n";
GeniMail2 += "EVENT TYPE=CLICK XPATH=//input[@type='checkbox'] \n";
GeniMail2 += "EVENT TYPE=CLICK XPATH=(//span[@class='inner-button'])[2] \n";

iimPlay(GeniMail2);desktop                                                                                               �  �                                                                                                                                                                                                                           �
 ##�aNEWSLETTERSANNFRIEDMANEMAILvar initGlobal3 = "CODE:";
initGlobal3    += "SET !ERRORIGNORE YES \n";
initGlobal3    += '{[AGENT]}\n';
initGlobal3    += "SET !TIMEOUT_STEP 5 \n";
initGlobal3    += "SET !TIMEOUT_PAGE 2 \n";
initGlobal3    += "SET !WAITPAGECOMPLETE YES\n";
initGlobal3    += "{[PROXY_IP]} \n";
initGlobal3    += '{[PROXY_LOGIN]} \n'; 

var GeniMail3  = initGlobal3;
GeniMail3 += "TAB T=1 \n";
GeniMail3 += "TAB CLOSEALLOTHERS \n";
GeniMail3 += "URL GOTO=https://www.annfriedman.com/weekly  \n";
GeniMail3 += "Wait Seconds=2 \n";
GeniMail3 += "TAG XPATH=//input[@class='email'] CONTENT={[EMAIL]} \n";
GeniMail3 += "WAIT SECONDS=2 \n";
GeniMail3 += "TAG XPATH= //input[@type='submit'] \n";
GeniMail3 += "WAIT SECONDS=2 \n";

iimPlay(GeniMail3);desktop    }  � }                                                                                                                 �| 
 =_�OHOTMAILOPEN SEEDS WITH RECOVERYEMAIL/PASSWORD/RECOVERY/IP:PORT:USER:PASSvar initGlobal,openPa   ��
 #�YNEWSLETTERSBOMBTRACKEMAILvar initGlobal4 = "CODE:";
initGlobal4    += "SET !ERRORIGNORE YES \n";
initGlobal4    += '{[AGENT]}\n';
initGlobal4    += "SET !TIMEOUT_STEP 5 \n";
initGlobal4    += "SET !TIMEOUT_PAGE 2 \n";
initGlobal4    += "SET !WAITPAGECOMPLETE YES\n";
initGlobal4    += "{[PROXY_IP]} \n";
initGlobal4    += '{[PROXY_LOGIN]} \n'; 

var GeniMail4  = initGlobal4;
GeniMail4 += "TAB T=1 \n";
GeniMail4 += "TAB CLOSEALLOTHERS \n";
GeniMail4 += "URL GOTO=http://bombtrack.com/newsletter-subscription/ \n";
GeniMail4 += "Wait Seconds=5 \n";
GeniMail4 += "TAG XPATH=//input[@type='email'] CONTENT={[EMAIL]} \n";
GeniMail4 += "Wait Seconds=2 \n";
GeniMail4 += "EVENT TYPE=CLICK XPATH=//input[contains(@type,'submit')] \n";

iimPlay(GeniMail4);desktop   �rams;


initGlobal    = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 5 \n";
initGlobal   += "SET !TIMEOUT_PAGE 2 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "CLEAR \n";

openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";
openParams += "SET !TIMEOUT_PAGE 10 \n";
openParams += "SET !TIMEOUT_STEP 2 \n";
openParams += "URL GOTO=https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1558390193&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7e93273f-0908-9ca4-c99f-f5c7f8d0e5ce&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015 \n";
openParams += "WAIT SECONDS=8 \n";  
openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"#i0116\" CHARS=\"{[EMAIL]}\"\n"; 
openParams += "WAIT SECONDS=   �1\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#idSIButton9\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"#i0118\" CHARS=\"{[PASSWORD]}\"\n"; 
openParams += "WAIT SECONDS=1.5\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#idSIButton9\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=4\n";
iimPlay(openParams);

openParams  = initGlobal;
openParams += "wait seconds=1 \n";    
openParams += "SET !EXTRACT null \n";
openParams += "TAG POS=1 TYPE=DIV ATTR=ID:iSelectProofTitle EXTRACT=TXT \n";
openParams += "wait seconds=0.5 \n";
iimPlay(openParams);

var res3 = iimGetLastExtract();
if (res3.includes("Help us protect your account"))
{
  openParams  = initGlobal;
  openParams += "SET !EXTRACT null \n";
  openParams += "TAG POS=1 TYPE=SPAN ATTR=CLASS:dirltr EXTRACT=TXT\n";
  iimPlay(openParams);
  var res4 = iimGetLastExtract();

  if ("{[RECOVERY]}".includes("mailnesia.com"))
  {
    openParams  = initGlobal;
    openParams += "TAG POS=1    �TYPE=SPAN ATTR=CLASS:dirltr\n";
    openParams += "wait seconds=1 \n";
    openParams += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:pageDialogForm_0 ATTR=ID:iProofEmail CONTENT="+"{[RECOVERY]}".split("@",1)+" \n";
    openParams += "wait seconds=1 \n";
    openParams += "TAG POS=1 TYPE=INPUT ATTR=ID:iSelectProofAction \n";
    openParams += "wait seconds=6 \n";
    iimPlay(openParams);
  
    openParams  = initGlobal;
    openParams += "TAB OPEN \n";
    openParams += "TAB T=2 \n";
    openParams += "URL GOTO=http://mailnesia.com/mailbox/"+"{[RECOVERY]}".split("@",1)+" \n";
    openParams += "wait seconds=3 \n";
    openParams += "TAG POS=1 TYPE=A ATTR=TXT:"+"{[RECOVERY]}".split("@",1)+"@mailnesia.com \n";
    openParams += "wait seconds=1 \n";
    openParams += "TAB T=2 \n";
    openParams += "wait seconds=2 \n";
    openParams += "TAG POS=1 TYPE=SPAN ATTR=STYLE:font-family* EXTRACT=TXT \n";
    openParams += "wait seconds=1 \n";
    iimPlay(openParams);
    var res7 = iimGetLastExtract();
   �    
    openParams  = initGlobal;
    if (res7 == null)
    {
      openParams += "PAUSE \n";
    }
    else
    {
      openParams += "TAB T=0 \n";
      openParams += "TAB CLOSEALLOTHERS \n";
      openParams += "wait seconds=1 \n";
      openParams += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:pageDialogForm_1 ATTR=ID:iOttText CONTENT=\""+res7+"\" \n";
      openParams += "wait seconds=1 \n";
      openParams += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:pageDialogForm_1 ATTR=ID:iVerifyCodeAction\n";
      openParams += "wait seconds=3 \n";
    }
    iimPlay(openParams);
  }
  else if ("{[RECOVERY]}".includes("mailforspam.com"))
  {
    openParams  = initGlobal;
    openParams += "TAG POS=1 TYPE=SPAN ATTR=CLASS:dirltr\n";
    openParams += "wait seconds=1 \n";
    openParams += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:pageDialogForm_0 ATTR=ID:iProofEmail CONTENT="+"{[RECOVERY]}".split("@",1)+" \n";
    openParams += "wait seconds=1 \n";
    openParams += "TAG POS=1 TYPE=INPUT ATTR=ID:iSelectProof   �Action \n";
    openParams += "wait seconds=6 \n";
    iimPlay(openParams);
  
    openParams  = initGlobal;
    openParams += "TAB OPEN \n";
    openParams += "TAB T=2 \n";
    openParams += "URL GOTO=https://www.mailforspam.com/mail/"+"{[RECOVERY]}".split("@",1)+" \n";
    openParams += "wait seconds=3 \n";
    openParams += "TAG POS=1 TYPE=A ATTR=TXT:Microsoft<sp>* \n";
    openParams += "wait seconds=2 \n";
    openParams += "TAB T=2 \n";
    openParams += "wait seconds=2 \n";
    openParams += "TAG POS=1 TYPE=P ATTR=ID:MESSAGEBODY EXTRACT=TXT \n";
    openParams += "wait seconds=0.5 \n";
    iimPlay(openParams);
    var resmsg = iimGetLastExtract();
    if (resmsg == null)
    {
      openParams += "PAUSE \n";
      iimPlay(openParams);
    }
    else
    {
      resmsg=resmsg.split('\n')[2];
      resmsg=resmsg.replace(/\D/g,"");

      openParams  = initGlobal;
      if (resmsg == null)
      {
        openParams += "PAUSE \n";
      }
      else
      {
        op   �enParams += "TAB T=0 \n";
        openParams += "TAB CLOSEALLOTHERS \n";
        openParams += "wait seconds=1 \n";
        openParams += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:pageDialogForm_1 ATTR=ID:iOttText CONTENT=\""+resmsg+"\" \n";
        openParams += "wait seconds=1 \n";
        openParams += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:pageDialogForm_1 ATTR=ID:iVerifyCodeAction\n";
        openParams += "wait seconds=3 \n";
      }
      iimPlay(openParams);
    }
  }
}

openParams = initGlobal;
openParams += "EVENT TYPE=CLICK SELECTOR=\"#iLooksGood\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#iShowSkip\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#KmsiCheckboxField\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=1\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#idSIButton9\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#iCancel\" BUTTON=0\n";
open    Params += "WAIT SECONDS=2\n";
openParams += "URL GOTO =https://outlook.live.com/mail/0/ \n";
openParams += "WAIT SECONDS=20\n";

var macroTest = initGlobal;
macroTest +="SET !EXTRACT null\n";
macroTest +="SET !EXTRACT {{!URLCURRENT}}\n";
macroTest +="wait seconds=1\n";

var final=initGlobal;
final += "TAB CLOSE\n";

var NotFound=initGlobal;
NotFound += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]},{[RECOVERY]}{[PROXY]}\n";
NotFound += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]}  FILE=open_error_hotmail.txt\n";

iimPlay(openParams);
iimPlay(macroTest);
var currurl=iimGetLastExtract();
if (!currurl.includes("https://outlook.live.com/mail/0/"))
{
        iimPlay(openParams);
        iimPlay(macroTest);
        var currurl2=iimGetLastExtract();
        if (!currurl2.includes("https://outlook.live.com/mail/0/"))
        {
            iimPlay(NotFound);
        }
}

iimPlay(final);desktop                                                                                  �Y_IP]} \n";
initGlobal2  += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";
openParams += "URL GOTO=https://outlook.live.com/mail/0/junkemail \n";
openParams += "WAIT SECONDS=2 \n";  
openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
openParams += "WAIT SECONDS=10\n";
iimPlay(openParams);

openParams = initGlobal2;
openParams +="TAG POS=1 TYPE=SPAN ATTR=TXT:\"Your Microsoft*\"\n";
crl = iimPlay(openParams);

if (crl > 0)
{
    openParams  = initGlobal; 
    openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Continue \n";   
    openParams += "wait seconds=2 \n";
    iimPlay(openParams);
}

openParams = initGlobal;
openParams +="SET !EXTRACT null\n";
openParams +="SET !EXTRACT {{!URLCURRENT}}\n";
openParams +="wait seconds=1\n";
iimPlay(openParams);
var crl=iimGetLastExtract();
if (crl.includes("https://outlook.live.com/mail/0"))
{
  openParams  = initGloba   �l;  
  openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Don't<sp>show<sp>this<sp>to<sp>me<sp>again \n";
  openParams += "wait seconds=0.5 \n";
  iimPlay(openParams);

  scriptsrch  = initGlobal; 
  if ("{[_SEARCH]}".includes("YES")) //SEARCH
  {
    scriptsrch += "TAG POS=1 TYPE=BUTTON ATTR=id:search-icon \n";
    scriptsrch += "wait seconds=1 \n";
    scriptsrch += "TAG POS=1 TYPE=INPUT:SEARCH ATTR=* CONTENT=isread:(no)<sp>{[SEARCH]} \n"; //SEARCH subject:() or ...
    scriptsrch += "wait seconds=0.5 \n";
    scriptsrch += "EVENT TYPE=KEYPRESS SELECTOR=\"INPUT[TYPE='SEARCH']\" KEY=13 \n";   
    scriptsrch += "wait seconds=1.5 \n"; 
  }  
  else //NORMAL REPORTING
  {
    scriptsrch += "TAG POS=1 TYPE=DIV ATTR=TXT:Filter \n";
    scriptsrch += "wait seconds=0.5 \n";
    scriptsrch += "TAG POS=1 TYPE=SPAN ATTR=TXT:Unread \n";
    scriptsrch += "wait seconds=1.5 \n";
  }

  iimPlay(scriptsrch);

  for (boc = 1; boc < 10;boc++)
  {
    openParams  = initGlobal2;
    openParams += "TAG   � XPATH=\"(//div[contains(@class,'TmWkQM3YrNJ6NtGicXces')])[1]\" \n"; //SELECT FIRST MSG
    crl         = iimPlay(openParams);

    if (crl > 0)  
    { 
      boc = 1;

      openParams  = initGlobal; 
      openParams += "wait seconds=0.5 \n";   
      openParams += "TAG POS=1 TYPE=A ATTR=TXT:Show<sp>blocked<sp>content \n";   
      openParams += "wait seconds=0.5 \n";   
      openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:More<sp>options \n";   
      openParams += "wait seconds=0.5 \n";
      openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Mark<sp>as<sp>not<sp>junk \n";   
      openParams += "wait seconds=0.5 \n";

      
      if ("{[_TRUSTEMAIL]}".includes("YES")) //YES:Always trust email from 
      {
        openParams += "TAG POS=1 TYPE=I ATTR=data-icon-name:CheckboxUncheckedRegular) \n"; 
      }
      else //NO:Always trust email from  
      {
        openParams += "TAG POS=1 TYPE=I ATTR=data-icon-name:CheckboxCheckedFilled \n";   
      } 

      openParams += "w   �ait seconds=0.5 \n";
      openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:OK \n";   
      openParams += "wait seconds=1 \n";          
      iimPlay(openParams);
    }
    else  
    {  
        boc = 10;  
    }
  }

  //GO TO INBOX
  openParams  = initGlobal; 
  openParams += "URL GOTO=https://outlook.live.com/mail/0/inbox \n";  
  openParams += "wait seconds=6 \n"; 
  iimPlay(openParams);

  scriptsrch  = initGlobal; 
  if ("{[_SEARCH]}".includes("YES")) //SEARCH
  {
    scriptsrch += "TAG POS=1 TYPE=BUTTON ATTR=id:search-icon \n";
    scriptsrch += "wait seconds=1 \n";
    scriptsrch += "TAG POS=1 TYPE=INPUT:SEARCH ATTR=* CONTENT=isread:(no)<sp>{[SEARCH]} \n"; //SEARCH subject:() or ...
    scriptsrch += "wait seconds=0.5 \n";
    scriptsrch += "EVENT TYPE=KEYPRESS SELECTOR=\"INPUT[TYPE='SEARCH']\" KEY=13 \n";   
    scriptsrch += "wait seconds=2 \n"; 
    scriptsrch += "TAG POS=1 TYPE=DIV ATTR=aria-label:Folder<sp>scope,<sp>* \n";
    scriptsrch += "wait seconds=0.5 \n";
    �   scriptsrch += "TAG POS=1 TYPE=DIV ATTR=aria-label:Inbox,<sp>* \n";
    scriptsrch += "wait seconds=1.5 \n";  
  }  
  else //NORMAL REPORTING
  {
    scriptsrch += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:Filter \n";
    scriptsrch += "wait seconds=0.5 \n";
    scriptsrch += "TAG POS=1 TYPE=SPAN ATTR=TXT:Unread \n";
    scriptsrch += "wait seconds=1.5 \n";
  }
  
  iimPlay(scriptsrch);

  for (boc = 1; boc < 10;boc++)
  {
    openParams  = initGlobal2;
    openParams += "TAG XPATH=\"(//div[contains(@class,'TmWkQM3YrNJ6NtGicXces')])[1]\" \n"; //SELECT FIRST MSG
    openParams += "wait seconds=1 \n";
    crl         = iimPlay(openParams);

    if (crl > 0)  
    { 
      boc = 1;

      if ("{[_FLAG]}".includes("YES")) //FLAG
      {
        openParams  = initGlobal; 

        if ("{[_FLAGRANDOM]}".includes("YES"))
        {
            t=Math.floor(Math.random() * 2) + 1;
            if(t == 1)
            {
              openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-labe   �l:More<sp>options \n";   
              openParams += "wait seconds=0.5 \n";
              openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Flag \n";   
              openParams += "wait seconds=0.5 \n";
            }
        }
        else
        {
          openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:More<sp>options \n";   
          openParams += "wait seconds=0.5 \n";
          openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Flag \n";   
          openParams += "wait seconds=0.5 \n";
        }

        iimPlay(openParams);
      }

      if ("{[_CLICKLINK]}".includes("YES")) //CLICK LINK
      {
        openParams  = initGlobal; 

        if ("{[_CLICKLINKRANDOM]}".includes("YES"))
        {
            t=Math.floor(Math.random() * 2) + 1;
            if(t == 1)
            {
              openParams += "EVENT TYPE=CLICK XPATH=\"(//a[@data-auth='NotApplicable' and @target='_blank'])[1]\" BUTTON=0 \n";   
              openParams += "wait seconds=3.5 \n";
              open   �Params += "TAB T=1 \n";   
              openParams += "wait seconds=0.5 \n";
              openParams += "TAB CLOSEALLOTHERS \n";
            }
        }
        else
        {
          openParams += "EVENT TYPE=CLICK XPATH=\"(//a[@data-auth='NotApplicable' and @target='_blank'])[1]\" BUTTON=0 \n";   
          openParams += "wait seconds=3.5 \n";
          openParams += "TAB T=1 \n";   
          openParams += "wait seconds=0.5 \n";
          openParams += "TAB CLOSEALLOTHERS \n";
        }

        iimPlay(openParams);
      }
      
      if ("{[_REPLY]}".includes("YES")) //REPLY
      {
        openParams  = initGlobal; 

        if ("{[_REPLYRANDOM]}".includes("YES"))
        {
            t=Math.floor(Math.random() * 2) + 1;
            if(t == 1)
            {
              openParams += "TAG POS=1 TYPE=I ATTR=data-icon-name:ChevronDownRegular \n";   
              openParams += "wait seconds=0.5 \n";
              openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Reply \n";   �   
              openParams += "wait seconds=0.5 \n";
              openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][aria-multiline ='true']\" CHARS=\"{[!REPLYMESSAGE]}\" \n";   
              openParams += "wait seconds=0.5 \n";
              openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Send \n";
              openParams += "wait seconds=0.5 \n";
            }
        }
        else
        {
          openParams += "TAG POS=1 TYPE=I ATTR=data-icon-name:ChevronDownRegular \n";   
          openParams += "wait seconds=0.5 \n";
          openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Reply \n";   
          openParams += "wait seconds=0.5 \n";
          openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][aria-multiline ='true']\" CHARS=\"{[!REPLYMESSAGE]}\" \n";   
          openParams += "wait seconds=0.5 \n";
          openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Send \n";
          openParams += "wait seconds=0.5 \n";
        }

        iimPla   �y(openParams);
        
        openParams  = initGlobal2;
        openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:Something<sp>went<sp>wrong \n";
        crl = iimPlay(openParams);
        
        if (crl > 0)  //Something went wrong
        {
          openParams  = initGlobal; 
          openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:Something<sp>went<sp>wrong \n";
          openParams += "wait seconds=0.5 \n";
          openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";
          openParams += "wait seconds=6 \n";
          openParams += "TAG XPATH=\"(//div[contains(@class,'TmWkQM3YrNJ6NtGicXces')])[1]\" \n";
          openParams += "wait seconds=1 \n";
          iimPlay(openParams);
        }
      }

      openParams  = initGlobal;

      if ("{[_ARCHIVE]}".includes("YES")) //ARCHIVE
      {
        openParams += "TAG POS=1 TYPE=button ATTR=aria-label:Archive \n";   
        openParams += "wait seconds=1 \n";
      }
      else if ("{[_MOVETO]}".includes   �("YES")) //MOVE TO FOLDER
      {
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:More<sp>options \n";   
        openParams += "wait seconds=0.5 \n";
        openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Move<sp>to<sp>folder \n";   
        openParams += "wait seconds=0.5 \n";
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Conversation<sp>History \n";   
        openParams += "wait seconds=0.5 \n";
      }
      else
      {
        openParams += "TAG POS=1 TYPE=button ATTR=aria-label:Back \n";   
        openParams += "wait seconds=0.5 \n";

        if ("{[_SEARCH]}".includes("YES"))
        {
          openParams += "TAG POS=1 TYPE=DIV ATTR=data-testid:SearchText \n";
          openParams += "wait seconds=0.5 \n";
          openParams += "EVENT TYPE=KEYPRESS SELECTOR=\"INPUT[TYPE='SEARCH']\" KEY=13 \n";
          openParams += "wait seconds=2 \n";
          openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Folder<sp>scope,<sp>* \n";
          openParams += "wait s    econds=0.5 \n";
          openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Inbox,<sp>* \n"; 
        }
        else
        {
          openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:Clear<sp>Unread<sp>filter \n";
          openParams += "wait seconds=0.5 \n";
          openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:Filter \n";
          openParams += "wait seconds=0.5 \n";
          openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Unread \n";
        }

        openParams += "wait seconds=1.5 \n";
      }
       
      iimPlay(openParams);
    }
    else  
    {  
        boc = 10;  
    }
  }

  openParams  = initGlobal; 
  openParams += "TAB CLOSE\n";       
  iimPlay(openParams);
}
else
{  
  openParams  = initGlobal;
  openParams +="ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
  openParams +="SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=reporting_spam_inbox_error_hotmail.txt\n";
  openParams +="TAB CLOSE\n";
  iimPlay(openParams);  
} mobile    �  �                                                                                                                                                                                                                         �j# C��wHOTMAILREPORTING SPAM/INBOX MOBILEvar initGlobal,initGlobal2,openParams,boc,crl,t,scriptsrch;

initGlobal    = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 6 \n";
initGlobal   += "SET !TIMEOUT_PAGE 1 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "SET !REPLYMESSAGE EVAL(\"var options = [{[REPLYMESSAGE]}]; var string = ''; for (var i = 0; i < 1; i++) { string += options[parseInt(Math.random() * options.length)]}; string\") \n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n'; 

initGlobal2   = "CODE:";
initGlobal2  += '{[AGENT]}\n';
initGlobal2  += "SET !TIMEOUT_STEP 6 \n";
initGlobal2  += "SET !TIMEOUT_PAGE 1 \n";
initGlobal2  += "{[PROX   �   �\") \n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n'; 

initGlobal2   = "CODE:";
initGlobal2  += '{[AGENT]}\n';
initGlobal2  += "SET !TIMEOUT_STEP 6 \n";
initGlobal2  += "SET !TIMEOUT_PAGE 1 \n";
initGlobal2  += "{[PROXY_IP]} \n";
initGlobal2  += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";
openParams += "URL GOTO=https://outlook.live.com/mail/0/inbox \n";
openParams += "WAIT SECONDS=2 \n";  
openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
openParams += "WAIT SECONDS=10\n";
iimPlay(openParams);

openParams = initGlobal2;
openParams +="TAG POS=1 TYPE=SPAN ATTR=TXT:\"Your Microsoft*\"\n";
crl = iimPlay(openParams);

if (crl > 0)
{
    openParams  = initGlobal; 
    openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Continue \n";   
    openParams += "wait seconds=2 \n";
    iimPlay(openParams);
}

openParams = initGlobal;
op   �enParams +="SET !EXTRACT null\n";
openParams +="SET !EXTRACT {{!URLCURRENT}}\n";
openParams +="wait seconds=1\n";
iimPlay(openParams);
var crl=iimGetLastExtract();
if (crl.includes("https://outlook.live.com/mail/0"))
{
  openParams  = initGlobal;  
  openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Don't<sp>show<sp>this<sp>to<sp>me<sp>again \n";
  openParams += "wait seconds=0.5 \n";
  iimPlay(openParams);

  scriptsrch  = initGlobal; 
  if ("{[_SEARCH]}".includes("YES")) //SEARCH
  {
    scriptsrch += "TAG POS=1 TYPE=BUTTON ATTR=id:search-icon \n";
    scriptsrch += "wait seconds=1 \n";
    scriptsrch += "TAG POS=1 TYPE=INPUT:SEARCH ATTR=* CONTENT=isread:(no)<sp>{[SEARCH]} \n"; //SEARCH subject:() or ...
    scriptsrch += "wait seconds=0.5 \n";
    scriptsrch += "EVENT TYPE=KEYPRESS SELECTOR=\"INPUT[TYPE='SEARCH']\" KEY=13 \n";   
    scriptsrch += "wait seconds=2 \n"; 
    scriptsrch += "TAG POS=1 TYPE=DIV ATTR=aria-label:Folder<sp>scope,<sp>* \n";
    scriptsrch += "wait seconds=0.5 \n   �";
    scriptsrch += "TAG POS=1 TYPE=DIV ATTR=aria-label:Inbox,<sp>* \n";
    scriptsrch += "wait seconds=1.5 \n";  
  }  
  else //NORMAL REPORTING
  {
    scriptsrch += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:Filter \n";
    scriptsrch += "wait seconds=0.5 \n";
    scriptsrch += "TAG POS=1 TYPE=SPAN ATTR=TXT:Unread \n";
    scriptsrch += "wait seconds=1.5 \n";
  }
  
  iimPlay(scriptsrch);

  for (boc = 1; boc < 10;boc++)
  {
    openParams  = initGlobal2;
    openParams += "TAG XPATH=\"(//div[contains(@class,'TmWkQM3YrNJ6NtGicXces')])[1]\" \n"; //SELECT FIRST MSG
    openParams += "wait seconds=1 \n";
    crl         = iimPlay(openParams);

    if (crl > 0)  
    { 
      boc = 1;

      if ("{[_FLAG]}".includes("YES")) //FLAG
      {
        openParams  = initGlobal; 

        if ("{[_FLAGRANDOM]}".includes("YES"))
        {
            t=Math.floor(Math.random() * 2) + 1;
            if(t == 1)
            {
              openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria   �-label:More<sp>options \n";   
              openParams += "wait seconds=0.5 \n";
              openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Flag \n";   
              openParams += "wait seconds=0.5 \n";
            }
        }
        else
        {
          openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:More<sp>options \n";   
          openParams += "wait seconds=0.5 \n";
          openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Flag \n";   
          openParams += "wait seconds=0.5 \n";
        }

        iimPlay(openParams);
      }

      if ("{[_CLICKLINK]}".includes("YES")) //CLICK LINK
      {
        openParams  = initGlobal; 

        if ("{[_CLICKLINKRANDOM]}".includes("YES"))
        {
            t=Math.floor(Math.random() * 2) + 1;
            if(t == 1)
            {
              openParams += "EVENT TYPE=CLICK XPATH=\"(//a[@data-auth='NotApplicable' and @target='_blank'])[1]\" BUTTON=0 \n";   
              openParams += "wait seconds=3.5 \n";
                � openParams += "TAB T=1 \n";   
              openParams += "wait seconds=0.5 \n";
              openParams += "TAB CLOSEALLOTHERS \n";
            }
        }
        else
        {
          openParams += "EVENT TYPE=CLICK XPATH=\"(//a[@data-auth='NotApplicable' and @target='_blank'])[1]\" BUTTON=0 \n";   
          openParams += "wait seconds=3.5 \n";
          openParams += "TAB T=1 \n";   
          openParams += "wait seconds=0.5 \n";
          openParams += "TAB CLOSEALLOTHERS \n";
        }

        iimPlay(openParams);
      }
      
      if ("{[_REPLY]}".includes("YES")) //REPLY
      {
        openParams  = initGlobal; 

        if ("{[_REPLYRANDOM]}".includes("YES"))
        {
            t=Math.floor(Math.random() * 2) + 1;
            if(t == 1)
            {
              openParams += "TAG POS=1 TYPE=I ATTR=data-icon-name:ChevronDownRegular \n";   
              openParams += "wait seconds=0.5 \n";
              openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Reply   � \n";   
              openParams += "wait seconds=0.5 \n";
              openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][aria-multiline ='true']\" CHARS=\"{[!REPLYMESSAGE]}\" \n";   
              openParams += "wait seconds=0.5 \n";
              openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Send \n";
              openParams += "wait seconds=0.5 \n";
            }
        }
        else
        {
          openParams += "TAG POS=1 TYPE=I ATTR=data-icon-name:ChevronDownRegular \n";   
          openParams += "wait seconds=0.5 \n";
          openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Reply \n";   
          openParams += "wait seconds=0.5 \n";
          openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][aria-multiline ='true']\" CHARS=\"{[!REPLYMESSAGE]}\" \n";   
          openParams += "wait seconds=0.5 \n";
          openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Send \n";
          openParams += "wait seconds=0.5 \n";
        }

        i   �imPlay(openParams);
        
        openParams  = initGlobal2;
        openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:Something<sp>went<sp>wrong \n";
        crl = iimPlay(openParams);
        
        if (crl > 0)  //Something went wrong
        {
          openParams  = initGlobal; 
          openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:Something<sp>went<sp>wrong \n";
          openParams += "wait seconds=0.5 \n";
          openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";
          openParams += "wait seconds=6 \n";
          openParams += "TAG XPATH=\"(//div[contains(@class,'TmWkQM3YrNJ6NtGicXces')])[1]\" \n";
          openParams += "wait seconds=1 \n";
          iimPlay(openParams);
        }
      }

      openParams  = initGlobal;

      if ("{[_ARCHIVE]}".includes("YES")) //ARCHIVE
      {
        openParams += "TAG POS=1 TYPE=button ATTR=aria-label:Archive \n";   
        openParams += "wait seconds=1 \n";
      }
      else if ("{[_MOVETO]}".inc   �ludes("YES")) //MOVE TO FOLDER
      {
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:More<sp>options \n";   
        openParams += "wait seconds=0.5 \n";
        openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Move<sp>to<sp>folder \n";   
        openParams += "wait seconds=0.5 \n";
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Conversation<sp>History \n";   
        openParams += "wait seconds=0.5 \n";
      }
      else
      {
        openParams += "TAG POS=1 TYPE=button ATTR=aria-label:Back \n";   
        openParams += "wait seconds=0.5 \n";

        if ("{[_SEARCH]}".includes("YES"))
        {
          openParams += "TAG POS=1 TYPE=DIV ATTR=data-testid:SearchText \n";
          openParams += "wait seconds=0.5 \n";
          openParams += "EVENT TYPE=KEYPRESS SELECTOR=\"INPUT[TYPE='SEARCH']\" KEY=13 \n";
          openParams += "wait seconds=2 \n";
          openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Folder<sp>scope,<sp>* \n";
          openParams += "w    ait seconds=0.5 \n";
          openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Inbox,<sp>* \n"; 
        }
        else
        {
          openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:Clear<sp>Unread<sp>filter \n";
          openParams += "wait seconds=0.5 \n";
          openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:Filter \n";
          openParams += "wait seconds=0.5 \n";
          openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Unread \n";
        }

        openParams += "wait seconds=1.5 \n";
      }
       
      iimPlay(openParams);
    }
    else  
    {  
        boc = 10;  
    }
  }

  openParams  = initGlobal; 
  openParams += "TAB CLOSE\n";       
  iimPlay(openParams);
}
else
{  
  openParams  = initGlobal;
  openParams +="ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
  openParams +="SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=reporting_inbox_error_hotmail.txt\n";
  openParams +="TAB CLOSE\n";
  iimPlay(openParams);  
} mobile    j � j                                                                                              �f%
 7�}HOTMAILREPORTING SPAM MOBILEvar initGlobal,initGlobal2,openParams,boc,crl,t,scriptsrch;

initGlobal    = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 6 \n";
initGlobal   += "SET !TIMEOUT_PAGE 1 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "SET !REPLYMESSAGE EV   ��n$ 9��	HOTMAILREPORTING INBOX MOBILEvar initGlobal,initGlobal2,openParams,boc,crl,t,scriptsrch;

initGlobal    = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 6 \n";
initGlobal   += "SET !TIMEOUT_PAGE 1 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "SET !REPLYMESSAGE EVAL(\"var options = [{[REPLYMESSAGE]}]; var string = ''; for (var i = 0; i < 1; i++) { string += options[parseInt(Math.random() * options.length)]}; string   �   �AL(\"var options = [{[REPLYMESSAGE]}]; var string = ''; for (var i = 0; i < 1; i++) { string += options[parseInt(Math.random() * options.length)]}; string\") \n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n'; 

initGlobal2   = "CODE:";
initGlobal2  += '{[AGENT]}\n';
initGlobal2  += "SET !TIMEOUT_STEP 6 \n";
initGlobal2  += "SET !TIMEOUT_PAGE 1 \n";
initGlobal2  += "{[PROXY_IP]} \n";
initGlobal2  += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";
openParams += "URL GOTO=https://outlook.live.com/mail/0/junkemail \n";
openParams += "WAIT SECONDS=2 \n";  
openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
openParams += "WAIT SECONDS=10\n";
iimPlay(openParams);

openParams = initGlobal2;
openParams +="TAG POS=1 TYPE=SPAN ATTR=TXT:\"Your Microsoft*\"\n";
crl = iimPlay(openParams);

if (crl > 0)
{
    openParams  = initGlobal; 
    ope   �nParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Continue \n";   
    openParams += "wait seconds=2 \n";
    iimPlay(openParams);
}

openParams = initGlobal;
openParams +="SET !EXTRACT null\n";
openParams +="SET !EXTRACT {{!URLCURRENT}}\n";
openParams +="wait seconds=1\n";
iimPlay(openParams);
var crl=iimGetLastExtract();
if (crl.includes("https://outlook.live.com/mail/0"))
{
  openParams  = initGlobal;  
  openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Don't<sp>show<sp>this<sp>to<sp>me<sp>again \n";
  openParams += "wait seconds=0.5 \n";
  iimPlay(openParams);

  scriptsrch  = initGlobal; 
  if ("{[_SEARCH]}".includes("YES")) //SEARCH
  {
    scriptsrch += "TAG POS=1 TYPE=BUTTON ATTR=id:search-icon \n";
    scriptsrch += "wait seconds=1 \n";
    scriptsrch += "TAG POS=1 TYPE=INPUT:SEARCH ATTR=* CONTENT=isread:(no)<sp>{[SEARCH]} \n"; //SEARCH subject:() or ...
    scriptsrch += "wait seconds=0.5 \n";
    scriptsrch += "EVENT TYPE=KEYPRESS SELECTOR=\"INPUT[TYPE='SEARCH']\" KEY=13 \n";   
      � scriptsrch += "wait seconds=1.5 \n"; 
  }  
  else //NORMAL REPORTING
  {
    scriptsrch += "TAG POS=1 TYPE=DIV ATTR=TXT:Filter \n";
    scriptsrch += "wait seconds=0.5 \n";
    scriptsrch += "TAG POS=1 TYPE=SPAN ATTR=TXT:Unread \n";
    scriptsrch += "wait seconds=1.5 \n";
  }

  iimPlay(scriptsrch);

  for (boc = 1; boc < 10;boc++)
  {
    openParams  = initGlobal2;
    openParams += "TAG XPATH=\"(//div[contains(@class,'TmWkQM3YrNJ6NtGicXces')])[1]\" \n"; //SELECT FIRST MSG
    crl         = iimPlay(openParams);

    if (crl > 0)  
    { 
      boc = 1;

      openParams  = initGlobal; 
      openParams += "wait seconds=0.5 \n";   
      openParams += "TAG POS=1 TYPE=A ATTR=TXT:Show<sp>blocked<sp>content \n";   
      openParams += "wait seconds=0.5 \n";   
      openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:More<sp>options \n";   
      openParams += "wait seconds=0.5 \n";
      openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Mark<sp>as<sp>not<sp>junk \n";   
      open    Params += "wait seconds=0.5 \n";

      
      if ("{[_TRUSTEMAIL]}".includes("YES")) //YES:Always trust email from 
      {
        openParams += "TAG POS=1 TYPE=I ATTR=data-icon-name:CheckboxUncheckedRegular) \n"; 
      }
      else //NO:Always trust email from  
      {
        openParams += "TAG POS=1 TYPE=I ATTR=data-icon-name:CheckboxCheckedFilled \n";   
      } 

      openParams += "wait seconds=0.5 \n";
      openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:OK \n";   
      openParams += "wait seconds=1 \n";          
      iimPlay(openParams);
    }
    else  
    {  
        boc = 10;  
    }
  }

  openParams  = initGlobal; 
  openParams += "TAB CLOSE\n";       
  iimPlay(openParams);
}
else
{  
  openParams  = initGlobal;
  openParams +="ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
  openParams +="SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=reporting_spam_error_hotmail.txt\n";
  openParams +="TAB CLOSE\n";
  iimPlay(openParams);  
} 
mobile   �lobal    = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 5 \n";
initGlobal   += "SET !TIMEOUT_PAGE 2 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "CLEAR \n";

openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";
openParams += "SET !TIMEOUT_PAGE 10 \n";
openParams += "SET !TIMEOUT_STEP 2 \n";
openParams += "URL GOTO=https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1558390193&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7e93273f-0908-9ca4-c99f-f5c7f8d0e5ce&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015 \n";
openParams += "WAIT SECONDS=8 \n";  
openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"#i0116\" CHARS=\"{[EMAIL]}\"\n"; 
openParams += "WAIT SECONDS=1\n";
openParam   �s += "EVENT TYPE=CLICK SELECTOR=\"#idSIButton9\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"#i0118\" CHARS=\"{[PASSWORD]}\"\n"; 
openParams += "WAIT SECONDS=1.5\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#idSIButton9\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=4\n";
iimPlay(openParams);

openParams  = initGlobal;
openParams += "wait seconds=1 \n";    
openParams += "SET !EXTRACT null \n";
openParams += "TAG POS=1 TYPE=DIV ATTR=ID:iSelectProofTitle EXTRACT=TXT \n";
openParams += "wait seconds=0.5 \n";
iimPlay(openParams);

var res3 = iimGetLastExtract();
if (res3.includes("Help us protect your account"))
{
  //mailnesia.com
  openParams  = initGlobal;
  openParams += "SET !EXTRACT null \n";
  openParams += "TAG POS=1 TYPE=SPAN ATTR=CLASS:dirltr EXTRACT=TXT\n";
  iimPlay(openParams);
  var res4 = iimGetLastExtract();
  if (res4.includes("mailnesia.com"))
  {
    openParams  = initGlobal;
    openParams += "TAG POS=1 TYPE=SPAN   � ATTR=CLASS:dirltr\n";
    openParams += "wait seconds=1 \n";
    openParams += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:pageDialogForm_0 ATTR=ID:iProofEmail CONTENT="+"{[EMAIL]}".split("@",1)+" \n";
    openParams += "wait seconds=1 \n";
    openParams += "TAG POS=1 TYPE=INPUT ATTR=ID:iSelectProofAction \n";
    openParams += "wait seconds=6 \n";
    iimPlay(openParams);
  
    openParams  = initGlobal;
    openParams += "TAB OPEN \n";
    openParams += "TAB T=2 \n";
    openParams += "URL GOTO=http://mailnesia.com/mailbox/"+"{[EMAIL]}".split("@",1)+" \n";
    openParams += "wait seconds=3 \n";
    openParams += "TAG POS=1 TYPE=A ATTR=TXT:"+"{[EMAIL]}".split("@",1)+"@mailnesia.com \n";
    openParams += "wait seconds=1 \n";
    openParams += "TAB T=2 \n";
    openParams += "wait seconds=2 \n";
    openParams += "TAG POS=1 TYPE=SPAN ATTR=STYLE:font-family* EXTRACT=TXT \n";
    openParams += "wait seconds=1 \n";
    iimPlay(openParams);
    var res7 = iimGetLastExtract();
    
    openPara   �ms  = initGlobal;
    if (res7 == null)
    {
      openParams += "PAUSE \n";
    }
    else
    {
      openParams += "TAB T=0 \n";
      openParams += "TAB CLOSEALLOTHERS \n";
      openParams += "wait seconds=1 \n";
      openParams += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:pageDialogForm_1 ATTR=ID:iOttText CONTENT=\""+res7+"\" \n";
      openParams += "wait seconds=1 \n";
      openParams += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:pageDialogForm_1 ATTR=ID:iVerifyCodeAction\n";
      openParams += "wait seconds=3 \n";
    }
    iimPlay(openParams);
  }
}

openParams = initGlobal;
openParams += "EVENT TYPE=CLICK SELECTOR=\"#iLooksGood\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#iShowSkip\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#KmsiCheckboxField\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=1\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#idSIButton9\" BUTTON=0\n"; 
openParams += "WAI    T SECONDS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#iCancel\" BUTTON=0\n";
openParams += "WAIT SECONDS=2\n";
openParams += "URL GOTO =https://outlook.live.com/mail/0/ \n";
openParams += "WAIT SECONDS=20\n";

var macroTest = initGlobal;
macroTest +="SET !EXTRACT null\n";
macroTest +="SET !EXTRACT {{!URLCURRENT}}\n";
macroTest +="wait seconds=1\n";

var final=initGlobal;
final += "TAB CLOSE\n";

var NotFound=initGlobal;
NotFound += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]}{[PROXY]}\n";
NotFound += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]}  FILE=open_error_hotmail.txt\n";

iimPlay(openParams);
iimPlay(macroTest);
var currurl=iimGetLastExtract();
if (!currurl.includes("https://outlook.live.com/mail/0/"))
{
        iimPlay(openParams);
        iimPlay(macroTest);
        var currurl2=iimGetLastExtract();
        if (!currurl2.includes("https://outlook.live.com/mail/0/"))
        {
            iimPlay(NotFound);
        }
}

iimPlay(final);mobile       � �$�                                                                                                                                                                                                                                                                                                                                                                                                          ��$( C��oGMAILREPORTING SPAM/INBOX MOBILEvar initGlobal,initGlobal2,openParams,boc,crl,t,scriptsrch,incrm;

initGlobal    = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 6 \n";
initGlobal   += "SET !TIMEOUT_PAGE 1 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "SET !REPLYMESSAGE EVAL(   �'
 K_�OHOTMAILOPEN SEEDS WITH RECOVERY MOBILEEMAIL/PASSWORD/RECOVERY/IP:PORT:USER:PASSvar initGlobal   �O&
 /M�HOTMAILOPEN SEEDS MOBILEEMAIL/PASSWORD/IP:PORT:USER:PASSvar initGlobal,openParams;


initG   �   �,openParams;


initGlobal    = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 5 \n";
initGlobal   += "SET !TIMEOUT_PAGE 2 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "CLEAR \n";

openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";
openParams += "SET !TIMEOUT_PAGE 10 \n";
openParams += "SET !TIMEOUT_STEP 2 \n";
openParams += "URL GOTO=https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1558390193&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7e93273f-0908-9ca4-c99f-f5c7f8d0e5ce&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015 \n";
openParams += "WAIT SECONDS=8 \n";  
openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"#i0116\" CHARS=\"{[EMAIL]}\"\n"; 
openParams += "WAIT S   �ECONDS=1\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#idSIButton9\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"#i0118\" CHARS=\"{[PASSWORD]}\"\n"; 
openParams += "WAIT SECONDS=1.5\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#idSIButton9\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=4\n";
iimPlay(openParams);

openParams  = initGlobal;
openParams += "wait seconds=1 \n";    
openParams += "SET !EXTRACT null \n";
openParams += "TAG POS=1 TYPE=DIV ATTR=ID:iSelectProofTitle EXTRACT=TXT \n";
openParams += "wait seconds=0.5 \n";
iimPlay(openParams);

var res3 = iimGetLastExtract();
if (res3.includes("Help us protect your account"))
{
  openParams  = initGlobal;
  openParams += "SET !EXTRACT null \n";
  openParams += "TAG POS=1 TYPE=SPAN ATTR=CLASS:dirltr EXTRACT=TXT\n";
  iimPlay(openParams);
  var res4 = iimGetLastExtract();

  if ("{[RECOVERY]}".includes("mailnesia.com"))
  {
    openParams  = initGlobal;
    openParams += "TAG   � POS=1 TYPE=SPAN ATTR=CLASS:dirltr\n";
    openParams += "wait seconds=1 \n";
    openParams += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:pageDialogForm_0 ATTR=ID:iProofEmail CONTENT="+"{[RECOVERY]}".split("@",1)+" \n";
    openParams += "wait seconds=1 \n";
    openParams += "TAG POS=1 TYPE=INPUT ATTR=ID:iSelectProofAction \n";
    openParams += "wait seconds=6 \n";
    iimPlay(openParams);
  
    openParams  = initGlobal;
    openParams += "TAB OPEN \n";
    openParams += "TAB T=2 \n";
    openParams += "URL GOTO=http://mailnesia.com/mailbox/"+"{[RECOVERY]}".split("@",1)+" \n";
    openParams += "wait seconds=3 \n";
    openParams += "TAG POS=1 TYPE=A ATTR=TXT:"+"{[RECOVERY]}".split("@",1)+"@mailnesia.com \n";
    openParams += "wait seconds=1 \n";
    openParams += "TAB T=2 \n";
    openParams += "wait seconds=2 \n";
    openParams += "TAG POS=1 TYPE=SPAN ATTR=STYLE:font-family* EXTRACT=TXT \n";
    openParams += "wait seconds=1 \n";
    iimPlay(openParams);
    var res7 = iimGetLastExtra   �ct();
    
    openParams  = initGlobal;
    if (res7 == null)
    {
      openParams += "PAUSE \n";
    }
    else
    {
      openParams += "TAB T=0 \n";
      openParams += "TAB CLOSEALLOTHERS \n";
      openParams += "wait seconds=1 \n";
      openParams += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:pageDialogForm_1 ATTR=ID:iOttText CONTENT=\""+res7+"\" \n";
      openParams += "wait seconds=1 \n";
      openParams += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:pageDialogForm_1 ATTR=ID:iVerifyCodeAction\n";
      openParams += "wait seconds=3 \n";
    }
    iimPlay(openParams);
  }
  else if ("{[RECOVERY]}".includes("mailforspam.com"))
  {
    openParams  = initGlobal;
    openParams += "TAG POS=1 TYPE=SPAN ATTR=CLASS:dirltr\n";
    openParams += "wait seconds=1 \n";
    openParams += "TAG POS=1 TYPE=INPUT:EMAIL FORM=ID:pageDialogForm_0 ATTR=ID:iProofEmail CONTENT="+"{[RECOVERY]}".split("@",1)+" \n";
    openParams += "wait seconds=1 \n";
    openParams += "TAG POS=1 TYPE=INPUT ATTR=ID:iSele   �ctProofAction \n";
    openParams += "wait seconds=6 \n";
    iimPlay(openParams);
  
    openParams  = initGlobal;
    openParams += "TAB OPEN \n";
    openParams += "TAB T=2 \n";
    openParams += "URL GOTO=https://www.mailforspam.com/mail/"+"{[RECOVERY]}".split("@",1)+" \n";
    openParams += "wait seconds=3 \n";
    openParams += "TAG POS=1 TYPE=A ATTR=TXT:Microsoft<sp>* \n";
    openParams += "wait seconds=2 \n";
    openParams += "TAB T=2 \n";
    openParams += "wait seconds=2 \n";
    openParams += "TAG POS=1 TYPE=P ATTR=ID:MESSAGEBODY EXTRACT=TXT \n";
    openParams += "wait seconds=0.5 \n";
    iimPlay(openParams);
    var resmsg = iimGetLastExtract();
    if (resmsg == null)
    {
      openParams += "PAUSE \n";
      iimPlay(openParams);
    }
    else
    {
      resmsg=resmsg.split('\n')[2];
      resmsg=resmsg.replace(/\D/g,"");

      openParams  = initGlobal;
      if (resmsg == null)
      {
        openParams += "PAUSE \n";
      }
      else
      {
      �     openParams += "TAB T=0 \n";
        openParams += "TAB CLOSEALLOTHERS \n";
        openParams += "wait seconds=1 \n";
        openParams += "TAG POS=1 TYPE=INPUT:TEL FORM=ID:pageDialogForm_1 ATTR=ID:iOttText CONTENT=\""+resmsg+"\" \n";
        openParams += "wait seconds=1 \n";
        openParams += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:pageDialogForm_1 ATTR=ID:iVerifyCodeAction\n";
        openParams += "wait seconds=3 \n";
      }
      iimPlay(openParams);
    }
  }
}

openParams = initGlobal;
openParams += "EVENT TYPE=CLICK SELECTOR=\"#iLooksGood\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#iShowSkip\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#KmsiCheckboxField\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=1\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#idSIButton9\" BUTTON=0\n"; 
openParams += "WAIT SECONDS=2\n";
openParams += "EVENT TYPE=CLICK SELECTOR=\"#iCancel\" BUTTON=0\n"    ;
openParams += "WAIT SECONDS=2\n";
openParams += "URL GOTO =https://outlook.live.com/mail/0/ \n";
openParams += "WAIT SECONDS=20\n";

var macroTest = initGlobal;
macroTest +="SET !EXTRACT null\n";
macroTest +="SET !EXTRACT {{!URLCURRENT}}\n";
macroTest +="wait seconds=1\n";

var final=initGlobal;
final += "TAB CLOSE\n";

var NotFound=initGlobal;
NotFound += "ADD !EXTRACT {[CURRENT_PROFILE]},{[EMAIL]},{[PASSWORD]},{[RECOVERY]}{[PROXY]}\n";
NotFound += "SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]}  FILE=open_error_hotmail.txt\n";

iimPlay(openParams);
iimPlay(macroTest);
var currurl=iimGetLastExtract();
if (!currurl.includes("https://outlook.live.com/mail/0/"))
{
        iimPlay(openParams);
        iimPlay(macroTest);
        var currurl2=iimGetLastExtract();
        if (!currurl2.includes("https://outlook.live.com/mail/0/"))
        {
            iimPlay(NotFound);
        }
}

iimPlay(final);mobile                                                                            �\"var options = [{[REPLYMESSAGE]}]; var string = ''; for (var i = 0; i < 1; i++) { string += options[parseInt(Math.random() * options.length)]}; string\") \n";
initGlobal   += "SET !VARRANDOM EVAL(\"var min = 2; var max = 6; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\") \n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n'; 

initGlobal2   = "CODE:";
initGlobal2  += '{[AGENT]}\n';
initGlobal2  += "SET !TIMEOUT_STEP 6 \n";
initGlobal2  += "SET !TIMEOUT_PAGE 1 \n";
initGlobal2  += "{[PROXY_IP]} \n";
initGlobal2  += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";

openParams += "URL GOTO=https://mail.google.com/mail/mu/mp/#tl/search/in%3ASpam%20{[_SEARCHSPAM]} \n";
openParams += "WAIT SECONDS=2 \n";  
openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
openParams += "WAIT SECONDS=15\n";
openParams += "T   �AG POS=1 TYPE=DIV ATTR=aria-label:Refresh\n";
openParams += "WAIT SECONDS=3\n";
iimPlay(openParams);

openParams = initGlobal;
openParams +="SET !EXTRACT null\n";
openParams +="SET !EXTRACT {{!URLCURRENT}}\n";
openParams +="wait seconds=1\n";
iimPlay(openParams);
var crl=iimGetLastExtract();
if (crl.includes("https://mail.google.com/mail/"))
{
    openParams  = initGlobal;  
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=class:An \n"; // i'm not interser (app)
    openParams += "wait seconds=1 \n";
    iimPlay(openParams);

    //REPORTING SPAM
    if ("{[_ACTIONNUMBER]}".includes("YES")) //Number of actions
    {
        var nmbr = "{[_NUMBERACTION]}";
        for (boc = 0; boc < nmbr;boc++)
        {
            openParams  = initGlobal2;

            if ("{[_OPENMSGINSPAM]}".includes("NO")) //D'ont open message in spam
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"ll d Zd rk\" \n"; //Mark the first message without reading it
            }
        �       else
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:jk \n"; //Select first message
            }
            
            crl = iimPlay(openParams);

            if (crl > 0)  
            {
                openParams  = initGlobal; 

                if ("{[_OPENMSGINSPAM]}".includes("NO")) //D'ont open message in spam
                {
                    openParams += "wait seconds=1 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:Show<sp>images \n"; //Show images
                }

                openParams += "wait seconds=0.5 \n";
                openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:Not<sp>spam \n"; //Not spam
                openParams += "wait seconds=0.5 \n";
                openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh\n";
                openParams += "wait seconds=1.5 \n";
                iimPlay(openParams);
            }
            else
            {
                boc = nmbr;
            }   �
        }
    }
    else
    {
        //REPORTING NORMAL SPAM
        for (boc = 1; boc < 10;boc++)
        {
            openParams  = initGlobal2;

            if ("{[_OPENMSGINSPAM]}".includes("NO")) //D'ont open message in spam
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"ll d Zd rk\" \n"; //Mark the first message without reading it
            }
            else
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:jk \n"; //Select first message
            }
            
            crl = iimPlay(openParams);

            if (crl > 0)  
            {
                boc = 1;
                openParams  = initGlobal; 

                if ("{[_OPENMSGINSPAM]}".includes("YES")) //D'ont open message in spam
                {
                    openParams += "wait seconds=1 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:Show<sp>images \n"; //Show images
                }

                openParams   � += "wait seconds=0.5 \n";
                openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:Not<sp>spam \n"; //Not spam
                openParams += "wait seconds=0.5 \n";
                openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh\n";
                openParams += "wait seconds=1.5 \n";
                iimPlay(openParams);
            }
            else
            {
                boc = 10;
            }
        }
    }

    //GO TO INBOX
    openParams = initGlobal;
    openParams += "URL GOTO=https://mail.google.com/mail/mu/mp/#tl/search/in%3AInbox%20{[_SEARCHINBOX]} \n"; //Search in inbox
    openParams += "WAIT SECONDS=1 \n";  
    openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
    openParams += "WAIT SECONDS=6\n";
    openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh\n";
    openParams += "WAIT SECONDS=2\n";
    iimPlay(openParams);

    //REPORTING INBOX
    incrm = 1;
    if ("{[_ACTIONNUMBER]}".includes("YES")) //Numbe   �r of actions
    {
        var nmbrinbox = "{[_NUMBERACTION]}";
        for (boc = 0; boc < nmbrinbox;boc++)
        {
            openParams  = initGlobal2;

            if ("{[_OPENMSGININBOX]}".includes("NO")) //Don't open the message in the inbox
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"ll d Zd rk\" \n"; //Mark the first message without reading it
            }
            else
            {
                if ("{[_OPENMSGINSPAM]}".includes("NO") || "{[_READ]}".includes("NO")) //D'ont open message in spam || Archive
                {
                    openParams += "TAG POS=1 TYPE=DIV ATTR=class:jk \n"; //Select first message
                }
                else
                {
                    openParams += "TAG POS=" + incrm + " TYPE=DIV ATTR=class:jk \n"; //Select next message
                    incrm++;
                }  
            }

            openParams += "wait seconds=1 \n";
            crl         = iimPlay(openParams   �);

            if (crl > 0)  
            {
                if ("{[_OPENMSGININBOX]}".includes("NO")) //Don't open the message in the inbox
                {
                    if ("{[_OPENMSGINSPAM]}".includes("NO")) //D'ont open message in spam
                    {
                        openParams  = initGlobal; 
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>Xs* \n"; //Other options
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:\"Mark as read\" \n";  //Mark as read
                        openParams += "wait seconds=0.5 \n";
                        iimPlay(openParams);
                    }

                    if ("{[_READ]}".includes("NO")) //Archive
                    {
                        openParams  = initGlobal;
                        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Archive \   �n"; //Archive
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh \n"; //Refresh
                        openParams += "wait seconds=0.5 \n";
                        iimPlay(openParams);
                    }

                    if ("{[_OPENMSGINSPAM]}".includes("NO") && "{[_READ]}".includes("YES"))
                    {
                        break;
                    }
                }
                else
                {
                    if ("{[_STAR]}".includes("YES")) //STAR
                    {
                        openParams  = initGlobal; 

                        if ("{[_STARRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=DIV ATTR=id:\"cvcstar\"&&style:\"display:none\"&&aria   �-label:\"Remove star\" \n"; //Star
                                openParams += "wait seconds=0.5 \n";
                            }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=DIV ATTR=id:\"cvcstar\"&&style:\"display:none\"&&aria-label:\"Remove star\" \n"; //Star 
                            openParams += "wait seconds=0.5 \n";
                        }

                        iimPlay(openParams);
                    }

                    if ("{[_CLICKLINK]}".includes("YES")) //CLICK LINK
                    {
                        openParams  = initGlobal; 

                        if ("{[_CLICKLINKRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&data-saferedirectur   �l:https://www.google.com/url*&&href:* \n"; //CLICK LINK
                                openParams += "wait seconds={{!VARRANDOM}} \n";
                                openParams += "TAB T=1 \n";   
                                openParams += "wait seconds=0.5 \n";
                                openParams += "TAB CLOSEALLOTHERS \n";
                            }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&data-saferedirecturl:https://www.google.com/url*&&href:* \n"; //CLICK LINK  
                            openParams += "wait seconds={{!VARRANDOM}} \n";
                            openParams += "TAB T=1 \n";   
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAB CLOSEALLOTHERS \n";
                        }

                        iimPlay(openParams);
                    }

                    if ("{[_REPL   �Y]}".includes("YES")) //REPLY
                    {
                        openParams  = initGlobal; 

                        if ("{[_REPLYRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>D<sp>di \n"; //Reply 
                                openParams += "wait seconds=0.5 \n";
                                openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][id='cmcbody']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                                openParams += "wait seconds=0.5 \n";
                                openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                                openParams += "wait seconds=0.5 \n";
                            }
                        }
                         �  else
                        {
                            openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>D<sp>di \n"; //Reply 
                            openParams += "wait seconds=0.5 \n";
                            openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][id='cmcbody']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }

                        iimPlay(openParams);
                    }

                    if ("{[_FORWARD]}".includes("YES")) //FORWARD
                    {
                        openParams  = initGlobal; 

                        if ("{[_FORWARDRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
     �                          if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>A<sp>di \n"; //Forward   
                                openParams += "wait seconds=0.5 \n";
                                openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"INPUT[aria-labelledby='cmal_composeto'][id='composeto']\" CHARS=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                                openParams += "wait seconds=0.5 \n";
                                openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                                openParams += "wait seconds=0.5 \n";
                            }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>A<sp>di \n"; //Forward  
                            openParams += "wait seconds=0.5 \n";
                              � openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"INPUT[aria-labelledby='cmal_composeto'][id='composeto']\" CHARS=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }

                        iimPlay(openParams);
                    }

                    openParams  = initGlobal; 

                    if ("{[_READ]}".includes("YES")) //READ
                    {
                        openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"Jl d iq cf qm vl sm\"&&role:\"button\" \n"; //Return
                    }
                    else //Archive
                    {
                        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Archive \n"; //Archive
                    }

                    openParams += "wait seconds=0.5   � \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh \n"; //Refresh
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);
                }
            }
            else
            {
                boc = nmbrinbox;
            }
        }
    }
    else
    {
        for (boc = 1; boc < 10;boc++)
        {
            openParams  = initGlobal2;

            if ("{[_OPENMSGININBOX]}".includes("NO")) //Don't open the message in the inbox
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"ll d Zd rk\" \n"; //Mark the first message without reading it
            }
            else
            {
                if ("{[_OPENMSGINSPAM]}".includes("NO") || "{[_READ]}".includes("NO")) //D'ont open message in spam || Archive
                {
                    openParams += "TAG POS=1 TYPE=DIV ATTR=class:jk \n"; //Select first message
                }
                else
            �       {
                    openParams += "TAG POS=" + incrm + " TYPE=DIV ATTR=class:jk \n"; //Select next message
                    incrm++;
                }  
            }

            openParams += "wait seconds=1 \n";
            crl         = iimPlay(openParams);

            if (crl > 0)  
            {
                boc = 1;

                if ("{[_OPENMSGININBOX]}".includes("NO")) //Don't open the message in the inbox
                {
                    if ("{[_OPENMSGINSPAM]}".includes("NO")) //D'ont open message in spam
                    {
                        openParams  = initGlobal; 
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>Xs* \n"; //Other options
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:\"Mark as read\" \n";  //Mark as read
                        openParams += "wait sec   �onds=0.5 \n";
                        iimPlay(openParams);
                    }

                    if ("{[_READ]}".includes("NO")) //Archive
                    {
                        openParams  = initGlobal;
                        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Archive \n"; //Archive
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh \n"; //Refresh
                        openParams += "wait seconds=0.5 \n";
                        iimPlay(openParams);
                    }

                    if ("{[_OPENMSGINSPAM]}".includes("NO") && "{[_READ]}".includes("YES"))
                    {
                        break;
                    }
                }
                else
                {
                    if ("{[_STAR]}".includes("YES")) //STAR
                    {
                        openParams  = initGlobal; 

                        if ("{[_STARR   �ANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=DIV ATTR=id:\"cvcstar\"&&style:\"display:none\"&&aria-label:\"Remove star\" \n"; //Star
                                openParams += "wait seconds=0.5 \n";
                            }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=DIV ATTR=id:\"cvcstar\"&&style:\"display:none\"&&aria-label:\"Remove star\" \n"; //Star 
                            openParams += "wait seconds=0.5 \n";
                        }

                        iimPlay(openParams);
                    }

                    if ("{[_CLICKLINK]}".includes("YES")) //CLICK LINK
                    {
                        openParams  = initGlobal; 

                        if ("{   �[_CLICKLINKRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&data-saferedirecturl:https://www.google.com/url*&&href:* \n"; //CLICK LINK
                                openParams += "wait seconds={{!VARRANDOM}} \n";
                                openParams += "TAB T=1 \n";   
                                openParams += "wait seconds=0.5 \n";
                                openParams += "TAB CLOSEALLOTHERS \n";
                            }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&data-saferedirecturl:https://www.google.com/url*&&href:* \n"; //CLICK LINK  
                            openParams += "wait seconds={{!VARRANDOM}} \n";
                               openParams += "TAB T=1 \n";   
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAB CLOSEALLOTHERS \n";
                        }

                        iimPlay(openParams);
                    }

                    if ("{[_REPLY]}".includes("YES")) //REPLY
                    {
                        openParams  = initGlobal; 

                        if ("{[_REPLYRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>D<sp>di \n"; //Reply 
                                openParams += "wait seconds=0.5 \n";
                                openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][id='cmcbody']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                                o  penParams += "wait seconds=0.5 \n";
                                openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                                openParams += "wait seconds=0.5 \n";
                            }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>D<sp>di \n"; //Reply 
                            openParams += "wait seconds=0.5 \n";
                            openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][id='cmcbody']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }

                        iimPlay(openParams);
                    }

                      if ("{[_FORWARD]}".includes("YES")) //FORWARD
                    {
                        openParams  = initGlobal; 

                        if ("{[_FORWARDRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>A<sp>di \n"; //Forward   
                                openParams += "wait seconds=0.5 \n";
                                openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"INPUT[aria-labelledby='cmal_composeto'][id='composeto']\" CHARS=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                                openParams += "wait seconds=0.5 \n";
                                openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                                openParams += "wait seconds=0.5 \n";
                              }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>A<sp>di \n"; //Forward  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"INPUT[aria-labelledby='cmal_composeto'][id='composeto']\" CHARS=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }

                        iimPlay(openParams);
                    }

                    openParams  = initGlobal; 

                    if ("{[_READ]}".includes("YES")) //READ
                    {
                        openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"Jl d     iq cf qm vl sm\"&&role:\"button\" \n"; //Return
                    }
                    else //Archive
                    {
                        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Archive \n"; //Archive
                    }

                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh \n"; //Refresh
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);
                }
            }
            else
            {
                boc = 10;
            }
        }
    }

    openParams  = initGlobal; 
    openParams += "TAB CLOSE \n";       
    iimPlay(openParams);
}
else
{  
  openParams  = initGlobal;
  openParams +="ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
  openParams +="SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=reporting_spam_error_gmail.txt\n";
  openParams +="TAB CLOSE\n";
  iimPlay(openParams);  
}mobile  SPAM]} \n";
openParams += "WAIT SECONDS=2 \n";  
openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
openParams += "WAIT SECONDS=15\n";
openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh\n";
openParams += "WAIT SECONDS=3\n";
iimPlay(openParams);

openParams = initGlobal;
openParams +="SET !EXTRACT null\n";
openParams +="SET !EXTRACT {{!URLCURRENT}}\n";
openParams +="wait seconds=1\n";
iimPlay(openParams);
var crl=iimGetLastExtract();
if (crl.includes("https://mail.google.com/mail/"))
{
    openParams  = initGlobal;  
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=class:An \n"; // i'm not interser (app)
    openParams += "wait seconds=1 \n";
    iimPlay(openParams);

    //REPORTING SPAM
    if ("{[_ACTIONNUMBER]}".includes("YES")) //Number of actions
    {
        var nmbr = "{[_NUMBERACTION]}";
        for (boc = 0; boc < nmbr;boc++)
        {
            openParams  = initGlobal2;

            if ("{[_OPENMSGINSPAM]}".includes("NO")) //D'on  t open message in spam
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"ll d Zd rk\" \n"; //Mark the first message without reading it
            }
            else
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:jk \n"; //Select first message
            }
            
            crl = iimPlay(openParams);

            if (crl > 0)  
            {
                openParams  = initGlobal; 

                if ("{[_OPENMSGINSPAM]}".includes("NO")) //D'ont open message in spam
                {
                    openParams += "wait seconds=1 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:Show<sp>images \n"; //Show images
                }

                openParams += "wait seconds=0.5 \n";
                openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:Not<sp>spam \n"; //Not spam
                openParams += "wait seconds=0.5 \n";
                openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh\n";  
                openParams += "wait seconds=1.5 \n";
                iimPlay(openParams);
            }
            else
            {
                boc = nmbr;
            }
        }
    }
    else
    {
        //REPORTING NORMAL SPAM
        for (boc = 1; boc < 10;boc++)
        {
            openParams  = initGlobal2;

            if ("{[_OPENMSGINSPAM]}".includes("NO")) //D'ont open message in spam
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"ll d Zd rk\" \n"; //Mark the first message without reading it
            }
            else
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:jk \n"; //Select first message
            }
            
            crl = iimPlay(openParams);

            if (crl > 0)  
            {
                boc = 1;
                openParams  = initGlobal; 

                if ("{[_OPENMSGINSPAM]}".includes("YES")) //D'ont open message in spam
                {
                        openParams += "wait seconds=1 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:Show<sp>images \n"; //Show images
                }

                openParams += "wait seconds=0.5 \n";
                openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:Not<sp>spam \n"; //Not spam
                openParams += "wait seconds=0.5 \n";
                openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh\n";
                openParams += "wait seconds=1.5 \n";
                iimPlay(openParams);
            }
            else
            {
                boc = 10;
            }
        }
    }

    openParams  = initGlobal; 
    openParams += "TAB CLOSE \n";       
    iimPlay(openParams);
}
else
{  
  openParams  = initGlobal;
  openParams +="ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
  openParams +="SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=reporting_spam_error_gmail.txt\n";
  openParams +="TAB CLOSE\n";
  iimPlay(openParams);  
}mobile    �  �                                                                                                                                                                       �8)
 7�%GMAILREPORTING SPAM MOBILEvar initGlobal,initGlobal2,openParams,boc,crl,t;

initGlobal    = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 6 \n";
initGlobal   += "SET !TIMEOUT_PAGE 1 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n'; 

initGlobal2   = "CODE:";
initGlobal2  += '{[AGENT]}\n';
initGlobal2  += "SET !TIMEOUT_STEP 6 \n";
initGlobal2  += "SET !TIMEOUT_PAGE 1 \n";
initGlobal2  += "{[PROXY_IP]} \n";
initGlobal2  += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";

openParams += "URL GOTO=https://mail.google.com/mail/mu/mp/#tl/search/in%3ASpam%20{[_SEARCH    


initGlobal2   = "CODE:";
initGlobal2  += '{[AGENT]}\n';
initGlobal2  += "SET !TIMEOUT_STEP 6 \n";
initGlobal2  += "SET !TIMEOUT_PAGE 1 \n";
initGlobal2  += "{[PROXY_IP]} \n";
initGlobal2  += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";

openParams += "URL GOTO=https://mail.google.com/mail/mu/mp/#tl/search/in%3AInbox%20{[_SEARCHINBOX]} \n";
openParams += "WAIT SECONDS=2 \n";  
openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
openParams += "WAIT SECONDS=15\n";
openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh\n";
openParams += "WAIT SECONDS=3\n";
iimPlay(openParams);

openParams = initGlobal;
openParams +="SET !EXTRACT null\n";
openParams +="SET !EXTRACT {{!URLCURRENT}}\n";
openParams +="wait seconds=1\n";
iimPlay(openParams);
var crl=iimGetLastExtract();
if (crl.includes("https://mail.google.com/mail/"))
{
    openParams  = initGlobal;  
      openParams += "TAG POS=1 TYPE=BUTTON ATTR=class:An \n"; // i'm not interser (app)
    openParams += "wait seconds=1 \n";
    iimPlay(openParams);

    //REPORTING INBOX
    if ("{[_ACTIONNUMBER]}".includes("YES")) //Number of actions
    {
        var nmbrinbox = "{[_NUMBERACTION]}";
        for (boc = 1; boc < nmbrinbox;boc++)
        {
            openParams  = initGlobal2;

            if ("{[_OPENMSGININBOX]}".includes("NO")) //Don't open the message in the inbox
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"ll d Zd rk\" \n"; //Mark the first message without reading it
            }
            else
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:jk \n"; //Select first message
            }

            openParams += "wait seconds=1 \n";
            crl         = iimPlay(openParams);

            if (crl > 0)  
            {
                if ("{[_OPENMSGININBOX]}".includes("NO")) //Don't open the message in the in  box
                {
                    openParams  = initGlobal; 
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>Xs* \n"; //Other options
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:\"Mark as read\" \n";  //Mark as read
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);

                    if ("{[_READ]}".includes("NO")) //Archive
                    {
                        openParams  = initGlobal;
                        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Archive \n"; //Archive
                        openParams += "wait seconds=0.5 \n";
                        iimPlay(openParams);
                    }

                    openParams  = initGlobal;
                    openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh \n"; //Refresh
                      openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);
                }
                else
                {
                    if ("{[_STAR]}".includes("YES")) //STAR
                    {
                        openParams  = initGlobal; 

                        if ("{[_STARRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=DIV ATTR=id:\"cvcstar\"&&style:\"display:none\"&&aria-label:\"Remove star\" \n"; //Star
                                openParams += "wait seconds=0.5 \n";
                            }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=DIV ATTR=id:\"cvcstar\"&&style:\"display:none\"&&aria-label:\"Remove star\" \n"; //Star 
                              openParams += "wait seconds=0.5 \n";
                        }

                        iimPlay(openParams);
                    }

                    if ("{[_CLICKLINK]}".includes("YES")) //CLICK LINK
                    {
                        openParams  = initGlobal; 

                        if ("{[_CLICKLINKRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&data-saferedirecturl:https://www.google.com/url*&&href:* \n"; //CLICK LINK
                                openParams += "wait seconds={{!VARRANDOM}} \n";
                                openParams += "TAB T=1 \n";   
                                openParams += "wait seconds=0.5 \n";
                                openParams += "TAB CLOSEALLOTHERS \n";
                            }
                          }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&data-saferedirecturl:https://www.google.com/url*&&href:* \n"; //CLICK LINK  
                            openParams += "wait seconds={{!VARRANDOM}} \n";
                            openParams += "TAB T=1 \n";   
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAB CLOSEALLOTHERS \n";
                        }

                        iimPlay(openParams);
                    }

                    if ("{[_REPLY]}".includes("YES")) //REPLY
                    {
                        openParams  = initGlobal; 

                        if ("{[_REPLYRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TY  PE=DIV ATTR=class:ll<sp>d<sp>D<sp>di \n"; //Reply 
                                openParams += "wait seconds=0.5 \n";
                                openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][id='cmcbody']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                                openParams += "wait seconds=0.5 \n";
                                openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                                openParams += "wait seconds=0.5 \n";
                            }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>D<sp>di \n"; //Reply 
                            openParams += "wait seconds=0.5 \n";
                            openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][id='cmcbody']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                            o  penParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }

                        iimPlay(openParams);
                    }

                    if ("{[_FORWARD]}".includes("YES")) //FORWARD
                    {
                        openParams  = initGlobal; 

                        if ("{[_FORWARDRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>A<sp>di \n"; //Forward   
                                openParams += "wait seconds=0.5 \n";
                                openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"INPUT[aria-labelledby='cmal_composeto'][id='composeto']\" CHARS  =\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                                openParams += "wait seconds=0.5 \n";
                                openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                                openParams += "wait seconds=0.5 \n";
                            }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>A<sp>di \n"; //Forward  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"INPUT[aria-labelledby='cmal_composeto'][id='composeto']\" CHARS=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                            openParams += "wait seconds=0  .5 \n";
                        }

                        iimPlay(openParams);
                    }

                    openParams  = initGlobal; 

                    if ("{[_READ]}".includes("YES")) //READ
                    {
                        openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"Jl d iq cf qm vl sm\"&&role:\"button\" \n"; //Return
                    }
                    else //Archive
                    {
                        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Archive \n"; //Archive
                    }

                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh \n"; //Refresh
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);
                }
            }
            else
            {
                boc = nmbrinbox;
            }
        }
    }
    else
    {
        for (boc = 1; boc < 10;boc++)
          {
            openParams  = initGlobal2;

            if ("{[_OPENMSGININBOX]}".includes("NO")) //Don't open the message in the inbox
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"ll d Zd rk\" \n"; //Mark the first message without reading it
            }
            else
            {
                openParams += "TAG POS=1 TYPE=DIV ATTR=class:jk \n"; //Select first message
            }

            openParams += "wait seconds=1 \n";
            crl         = iimPlay(openParams);

            if (crl > 0)  
            {
                boc = 1;

                if ("{[_OPENMSGININBOX]}".includes("NO")) //Don't open the message in the inbox
                {
                    openParams  = initGlobal; 
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>Xs* \n"; //Other options
                    openParams += "wait seconds=0.5 \n";
                    openParam  s += "TAG POS=1 TYPE=DIV ATTR=TXT:\"Mark as read\" \n";  //Mark as read
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);

                    if ("{[_READ]}".includes("NO")) //Archive
                    {
                        openParams  = initGlobal;
                        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Archive \n"; //Archive
                        openParams += "wait seconds=0.5 \n";
                        iimPlay(openParams);
                    }

                    openParams  = initGlobal;
                    openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh \n"; //Refresh
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);
                }
                else
                {
                    if ("{[_STAR]}".includes("YES")) //STAR
                    {
                        openParams  = initGlobal; 

                        if ("{[_STARRA  NDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=DIV ATTR=id:\"cvcstar\"&&style:\"display:none\"&&aria-label:\"Remove star\" \n"; //Star
                                openParams += "wait seconds=0.5 \n";
                            }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=DIV ATTR=id:\"cvcstar\"&&style:\"display:none\"&&aria-label:\"Remove star\" \n"; //Star 
                            openParams += "wait seconds=0.5 \n";
                        }

                        iimPlay(openParams);
                    }

                    if ("{[_CLICKLINK]}".includes("YES")) //CLICK LINK
                    {
                        openParams  = initGlobal; 

                        if ("{[  _CLICKLINKRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&data-saferedirecturl:https://www.google.com/url*&&href:* \n"; //CLICK LINK
                                openParams += "wait seconds={{!VARRANDOM}} \n";
                                openParams += "TAB T=1 \n";   
                                openParams += "wait seconds=0.5 \n";
                                openParams += "TAB CLOSEALLOTHERS \n";
                            }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&data-saferedirecturl:https://www.google.com/url*&&href:* \n"; //CLICK LINK  
                            openParams += "wait seconds={{!VARRANDOM}} \n";
                              openParams += "TAB T=1 \n";   
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAB CLOSEALLOTHERS \n";
                        }

                        iimPlay(openParams);
                    }

                    if ("{[_REPLY]}".includes("YES")) //REPLY
                    {
                        openParams  = initGlobal; 

                        if ("{[_REPLYRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>D<sp>di \n"; //Reply 
                                openParams += "wait seconds=0.5 \n";
                                openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][id='cmcbody']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                                op  enParams += "wait seconds=0.5 \n";
                                openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                                openParams += "wait seconds=0.5 \n";
                            }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>D<sp>di \n"; //Reply 
                            openParams += "wait seconds=0.5 \n";
                            openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][id='cmcbody']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }

                        iimPlay(openParams);
                    }

                      if ("{[_FORWARD]}".includes("YES")) //FORWARD
                    {
                        openParams  = initGlobal; 

                        if ("{[_FORWARDRANDOM]}".includes("YES"))
                        {
                            t=Math.floor(Math.random() * 2) + 1;
                            if(t == 1)
                            {
                                openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>A<sp>di \n"; //Forward   
                                openParams += "wait seconds=0.5 \n";
                                openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"INPUT[aria-labelledby='cmal_composeto'][id='composeto']\" CHARS=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                                openParams += "wait seconds=0.5 \n";
                                openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                                openParams += "wait seconds=0.5 \n";
                              }
                        }
                        else
                        {
                            openParams += "TAG POS=1 TYPE=DIV ATTR=class:ll<sp>d<sp>A<sp>di \n"; //Forward  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"INPUT[aria-labelledby='cmal_composeto'][id='composeto']\" CHARS=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=DIV ATTR=data-control-type:cmaasend+104 \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }

                        iimPlay(openParams);
                    }

                    openParams  = initGlobal; 

                    if ("{[_READ]}".includes("YES")) //READ
                    {
                        openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"Jl d     iq cf qm vl sm\"&&role:\"button\" \n"; //Return
                    }
                    else //Archive
                    {
                        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Archive \n"; //Archive
                    }

                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh \n"; //Refresh
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);
                }
            }
            else
            {
                boc = 10;
            }
        }
    }

    openParams  = initGlobal; 
    openParams += "TAB CLOSE \n";       
    iimPlay(openParams);
}
else
{  
  openParams  = initGlobal;
  openParams +="ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
  openParams +="SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=reporting_inbox_error_gmail.txt\n";
  openParams +="TAB CLOSE\n";
  iimPlay(openParams);  
}mobile                                                                                                                                                                                                                                                            ��,* 9��	GMAILREPORTING INBOX MOBILEvar initGlobal,initGlobal2,openParams,boc,crl,t;

initGlobal    = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 6 \n";
initGlobal   += "SET !TIMEOUT_PAGE 1 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "SET !REPLYMESSAGE EVAL(\"var options = [{[REPLYMESSAGE]}]; var string = ''; for (var i = 0; i < 1; i++) { string += options[parseInt(Math.random() * options.length)]}; string\") \n";
initGlobal   += "SET !VARRANDOM EVAL(\"var min = 2; var max = 6; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\") \n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n';   	  openParams += "TAB CLOSEALLOTHERS\n";

openParams += "URL GOTO=https://mail.google.com/mail/mu/mp/#tl/ \n";
openParams += "WAIT SECONDS=1 \n";  
openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
openParams += "WAIT SECONDS=15\n";
iimPlay(openParams);

openParams = initGlobal;
openParams +="SET !EXTRACT null\n";
openParams +="SET !EXTRACT {{!URLCURRENT}}\n";
openParams +="wait seconds=1\n";
iimPlay(openParams);
var crl=iimGetLastExtract();
if (crl.includes("https://mail.google.com/mail/"))
{
    openParams  = initGlobal;  
    openParams += "TAG POS=1 TYPE=BUTTON ATTR=class:An \n"; // i'm not interser (app)
    openParams += "wait seconds=1 \n";
    iimPlay(openParams);

    if ("{[_DELETESPAM]}".includes("YES"))
    {
        //GO TO SPAM
        openParams = initGlobal;
        openParams += "URL GOTO=https://mail.google.com/mail/mu/mp/#tl/search/in%3ASpam{[_SEARCH]} \n"; //Search in spam
        openParams += "WAIT SECONDS=12 \n";  
        openP  arams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
        openParams += "WAIT SECONDS=6\n";
        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh\n";
        openParams += "WAIT SECONDS=2\n";
        iimPlay(openParams);

        //DELETE MSG IN SPAM
        for (boc = 1; boc < 10;boc++)
        {
            openParams  = initGlobal2;
            openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"ll d Zd rk\" \n"; //Mark msg
            crl = iimPlay(openParams);

            if (crl > 0)  
            {
                boc = 1;
                
                if ("{[_DELETEONEBYONE]}".includes("YES")) //Delete one by one
                {
                    openParams  = initGlobal; 
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=role:\"button\"&&aria-label:\"Delete\" \n"; //Delete
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);   
                }
            }
            else
            {
                boc = 10;
            }
        }

        if ("{[_DELETEONEBYONE]}".includes("NO")) //Delete all at once
        {
            openParams  = initGlobal; 
            openParams += "wait seconds=0.5 \n";
            openParams += "TAG POS=1 TYPE=DIV ATTR=role:\"button\"&&aria-label:\"Delete\" \n"; //Delete
            openParams += "wait seconds=3 \n";
            iimPlay(openParams);
        }
    }

    if ("{[_DELETEINBOX]}".includes("YES"))
    {
        //GO TO INBOX
        openParams = initGlobal;
        openParams += "URL GOTO=https://mail.google.com/mail/mu/mp/#tl/search/in%3AInbox{[_SEARCH]} \n"; //Search in inbox
        openParams += "WAIT SECONDS=1 \n";  
        openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
        openParams += "WAIT SECONDS=6\n";
        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh\n";
        openParams += "WAIT SECON  !DS=2\n";
        iimPlay(openParams);

        //DELETE MSG IN INBOX
        for (boc = 1; boc < 10;boc++)
        {
            openParams  = initGlobal2;
            openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"ll d Zd rk\" \n"; //Mark msg
            crl = iimPlay(openParams);

            if (crl > 0)  
            {
                boc = 1;
                
                if ("{[_DELETEONEBYONE]}".includes("YES")) //Delete one by one
                {
                    openParams  = initGlobal; 
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=role:\"button\"&&aria-label:\"Delete\" \n"; //Delete
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);
                }
            }
            else
            {
                boc = 10;
            }
        }

        if ("{[_DELETEONEBYONE]}".includes("NO")) //Delete all at once
        {
            open  "Params  = initGlobal; 
            openParams += "wait seconds=0.5 \n";
            openParams += "TAG POS=1 TYPE=DIV ATTR=role:\"button\"&&aria-label:\"Delete\" \n"; //Delete
            openParams += "wait seconds=3 \n";
            iimPlay(openParams);
        }
    }

    if ("{[_DELETESENTMAIL]}".includes("YES"))
    {
        //GO TO SENT MAIL
        openParams = initGlobal;
        openParams += "URL GOTO=https://mail.google.com/mail/mu/mp/#tl/search/in%3ASent%20mail{[_SEARCH]} \n"; //Search in Trash
        openParams += "WAIT SECONDS=1 \n";  
        openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
        openParams += "WAIT SECONDS=6\n";
        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh\n";
        openParams += "WAIT SECONDS=2\n";
        iimPlay(openParams);

        //DELETE MSG IN SENT MAIL
        for (boc = 1; boc < 10;boc++)
        {
            openParams  = initGlobal2;
            openParams += "TAG POS=1 TYPE=D  #IV ATTR=class:\"ll d Zd rk\" \n"; //Mark msg
            crl = iimPlay(openParams);

            if (crl > 0)  
            {
                boc = 1;
                
                if ("{[_DELETEONEBYONE]}".includes("YES")) //Delete one by one
                {
                    openParams  = initGlobal; 
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=role:\"button\"&&aria-label:\"Delete\" \n"; //Delete
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);
                }
            }
            else
            {
                boc = 10;
            }
        }

        if ("{[_DELETEONEBYONE]}".includes("NO")) //Delete all at once
        {
            openParams  = initGlobal; 
            openParams += "wait seconds=0.5 \n";
            openParams += "TAG POS=1 TYPE=DIV ATTR=role:\"button\"&&aria-label:\"Delete\" \n"; //Delete
            openParams += "  $wait seconds=3 \n";
            iimPlay(openParams);
        }
    }

    if ("{[_DELETEALLMAIL]}".includes("YES"))
    {
        //GO TO ALL MAIL
        openParams = initGlobal;
        openParams += "URL GOTO=https://mail.google.com/mail/mu/mp/#tl/search/in%3AAll%20mail{[_SEARCH]} \n"; //Search in Trash
        openParams += "WAIT SECONDS=1 \n";  
        openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
        openParams += "WAIT SECONDS=6\n";
        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh\n";
        openParams += "WAIT SECONDS=2\n";
        iimPlay(openParams);

        //DELETE MSG IN ALL MAIL
        for (boc = 1; boc < 10;boc++)
        {
            openParams  = initGlobal2;
            openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"ll d Zd rk\" \n"; //Mark msg
            crl = iimPlay(openParams);

            if (crl > 0)  
            {
                boc = 1;
                
                if ("{[_DELETEONEBY  %ONE]}".includes("YES")) //Delete one by one
                {
                    openParams  = initGlobal; 
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=DIV ATTR=role:\"button\"&&aria-label:\"Delete\" \n"; //Delete
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);
                }
            }
            else
            {
                boc = 10;
            }
        }

        if ("{[_DELETEONEBYONE]}".includes("NO")) //Delete all at once
        {
            openParams  = initGlobal; 
            openParams += "wait seconds=0.5 \n";
            openParams += "TAG POS=1 TYPE=DIV ATTR=role:\"button\"&&aria-label:\"Delete\" \n"; //Delete
            openParams += "wait seconds=3 \n";
            iimPlay(openParams);
        }
    }

    if ("{[_DELETETRASH]}".includes("YES"))
    {
        //GO TO TRASH
        openParams = initGlobal;
        openParams += "URL  & GOTO=https://mail.google.com/mail/mu/mp/#tl/search/in%3ATrash{[_SEARCH]} \n"; //Search in Trash
        openParams += "WAIT SECONDS=1 \n";  
        openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
        openParams += "WAIT SECONDS=6\n";
        openParams += "TAG POS=1 TYPE=DIV ATTR=aria-label:Refresh\n";
        openParams += "WAIT SECONDS=2\n";
        iimPlay(openParams);

        //DELETE MSG IN TRASH
        for (boc = 1; boc < 10;boc++)
        {
            openParams  = initGlobal2;
            openParams += "TAG POS=1 TYPE=DIV ATTR=class:\"ll d Zd rk\" \n"; //Mark msg
            crl = iimPlay(openParams);

            if (crl > 0)  
            {
                boc = 1;
                
                if ("{[_DELETEONEBYONE]}".includes("YES")) //Delete one by one
                {
                    openParams  = initGlobal; 
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=DIV     ATTR=TXT:Delete<sp>forever \n"; //Delete forever
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);
                }
            }
            else
            {
                boc = 10;
            }
        }

        if ("{[_DELETEONEBYONE]}".includes("NO")) //Delete all at once
        {
            openParams  = initGlobal; 
            openParams += "wait seconds=0.5 \n";
            openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:Delete<sp>forever \n"; //Delete forever
            openParams += "wait seconds=3 \n";
            iimPlay(openParams);
        }
    }

    openParams  = initGlobal; 
    openParams += "TAB CLOSE \n";       
    iimPlay(openParams);
}
else
{  
  openParams  = initGlobal;
  openParams +="ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
  openParams +="SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=delete_error_gmail.txt\n";
  openParams +="TAB CLOSE\n";
  iimPlay(openParams);  
}mobile   , ,                                                                                                                                                                                                                                                                                                  �%+ 1��GMAILDELETE MSGS MOBILEvar initGlobal,initGlobal2,openParams,boc,crl,t,scriptsrch;

initGlobal    = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 6 \n";
initGlobal   += "SET !TIMEOUT_PAGE 1 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n'; 

initGlobal2   = "CODE:";
initGlobal2  += '{[AGENT]}\n';
initGlobal2  += "SET !TIMEOUT_STEP 6 \n";
initGlobal2  += "SET !TIMEOUT_PAGE 1 \n";
initGlobal2  += "{[PROXY_IP]} \n";
initGlobal2  += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
    )Math.random() * options.length)]}; string\") \n";
initGlobal   += "SET !VARRANDOM EVAL(\"var min = 2; var max = 6; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\") \n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n'; 

initGlobal2   = "CODE:";
initGlobal2  += '{[AGENT]}\n';
initGlobal2  += "SET !TIMEOUT_STEP 6 \n";
initGlobal2  += "SET !TIMEOUT_PAGE 1 \n";
initGlobal2  += "{[PROXY_IP]} \n";
initGlobal2  += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";

openParams += "URL GOTO=https://mail.yahoo.com/m/search/keyword=folder%253A6%2520{[_SEARCH]}?.src=ym&reason=mobile \n";
openParams += "WAIT SECONDS=2 \n";  
openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
openParams += "WAIT SECONDS=15\n";
iimPlay(openParams);

openParams = initGlobal;
openParams +="SET !EXTRACT null\n";
openParams +="SET !EXT  *RACT {{!URLCURRENT}}\n";
openParams +="wait seconds=1\n";
iimPlay(openParams);
var crl=iimGetLastExtract();
if (crl.includes("https://mail.yahoo.com/m/"))
{
    openParams  = initGlobal2;  
    openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:\"Welcome to Yahoo Mail!\" \n"; 
    crl = iimPlay(openParams);

    if (crl > 0) 
    {
        openParams = initGlobal;
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n"; 
        openParams += "wait seconds=0.5 \n"; 
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Not<sp>now \n"; 
        openParams += "wait seconds=0.5 \n"; 
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n"; 
        openParams += "wait seconds=0.5 \n"; 
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n"; 
        openParams += "wait seconds=0.5 \n"; 
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Take<sp>me<sp>to<sp>my<sp>inbox \n"; 
        openParams += " \n"; 
        iimPlay(openParams);
    }

    //REPORTING SPAM
    i  +f ("{[_ACTIONNUMBER]}".includes("YES")) //Number of actions
    {
        var nmbr = "{[_NUMBERACTION]}"; fnd = 0;

        for (boc = 0; boc < nmbr;boc++)
        {
            openParams  = initGlobal2;
            openParams += "TAG POS=1 TYPE=BUTTON ATTR=title:checkbox&&data-test-id:icon-btn-checkbox&&aria-checked:false \n"; //Mark the first message without reading it
            crl = iimPlay(openParams);

            if (crl > 0)  
            {
                fnd = 1;

                if ("{[_SELECTALL]}".includes("NO")) //One by one
                {
                    openParams  = initGlobal; 

                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:More \n"; //More
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:This<sp>is<sp>not<sp>spam \n"; //This is not spam
                    openParams += "wait seconds=1 \n";
                 ,     iimPlay(openParams);
                }
            }
            else
            {
                boc = nmbr;
            }
        }

        if ("{[_SELECTALL]}".includes("YES") && fnd == 1) //Select all msgs
        {
            openParams  = initGlobal; 
            openParams += "wait seconds=0.5 \n";
            openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:More \n"; //More
            openParams += "wait seconds=0.5 \n";
            openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:This<sp>is<sp>not<sp>spam \n"; //This is not spam
            openParams += "wait seconds=1 \n";
            iimPlay(openParams);
        }
    }
    else
    {
        fnd = 0;
        //REPORTING NORMAL SPAM
        for (boc = 1; boc < 10;boc++)
        {
            openParams  = initGlobal2;
            openParams += "TAG POS=1 TYPE=BUTTON ATTR=title:checkbox&&data-test-id:icon-btn-checkbox&&aria-checked:false \n"; //Mark the first message without reading it
            crl = iimPlay(o  -penParams);

            if (crl > 0)  
            {
                fnd = 1; boc = 1;

                if ("{[_SELECTALL]}".includes("NO")) //One by one
                {
                    openParams  = initGlobal; 

                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:More \n"; //More
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:This<sp>is<sp>not<sp>spam \n"; //This is not spam
                    openParams += "wait seconds=1 \n";
                    iimPlay(openParams);
                }
            }
            else
            {
                boc = 10;
            }
        }

        if ("{[_SELECTALL]}".includes("YES") && fnd == 1) //Select all msgs
        {
            openParams  = initGlobal; 
            openParams += "wait seconds=0.5 \n";
            openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:More \n"; //More  .
            openParams += "wait seconds=0.5 \n";
            openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:This<sp>is<sp>not<sp>spam \n"; //This is not spam
            openParams += "wait seconds=1 \n";
            iimPlay(openParams);
        }
    }

    //GO TO INBOX
    openParams = initGlobal;
    openParams += "URL GOTO=https://mail.yahoo.com/m/search/keyword=folder%253A1%2520{[_SEARCH]}?.src=ym&reason=mobile \n"; //Search in inbox
    openParams += "WAIT SECONDS=1 \n";  
    openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
    openParams += "WAIT SECONDS=6\n";
    iimPlay(openParams);

    //REPORTING INBOX
    if ("{[_ACTIONNUMBER]}".includes("YES")) //Number of actions
    {
        var nmbrinbox = "{[_NUMBERACTION]}"; rfrch = 0;

        for (boc = 0; boc < nmbrinbox;boc++)
        {
            openParams  = initGlobal2;
            openParams += "TAG XPATH=\"(//a[contains(@class,'D_F ek_BB gl_C em_N o_h')])[1]\" \n"; //Select first mess  /age
            openParams += "wait seconds=1.5 \n";
            crl         = iimPlay(openParams);

            if (crl > 0)  
            {
                if ("{[_STAR]}".includes("YES")) //STAR
                {
                    openParams  = initGlobal; 

                    if ("{[_STARRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:This<sp>message<sp>is<sp>not<sp>starred \n"; //Star
                            openParams += "wait seconds=0.5 \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:This<sp>message<sp>is<sp>not<sp>starred \n"; //Star
                        openParams += "wait seconds=0.5 \n";
                    }

                    ii  0mPlay(openParams);
                }

                if ("{[_CLICKLINK]}".includes("YES")) //CLICK LINK
                {
                    openParams  = initGlobal; 

                    if ("{[_CLICKLINKRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&href:* \n"; //CLICK LINK
                            openParams += "wait seconds={{!VARRANDOM}} \n";
                            openParams += "TAB T=1 \n";   
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAB CLOSEALLOTHERS \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&href:* \n"; //CLICK LINK  
                        openParams += "wait secon  1ds={{!VARRANDOM}} \n";
                        openParams += "TAB T=1 \n";   
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAB CLOSEALLOTHERS \n";
                    }

                    iimPlay(openParams);
                }

                if ("{[_REPLY]}".includes("YES")) //REPLY
                {
                    openParams  = initGlobal; 

                    if ("{[_REPLYRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-reply \n"; //Reply 
                            openParams += "wait seconds=0.5 \n";
                            openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][aria-multiline ='true']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                            openPa  2rams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-reply \n"; //Reply 
                        openParams += "wait seconds=0.5 \n";
                        openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][aria-multiline ='true']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                        openParams += "wait seconds=0.5 \n";
                    }

                    iimPlay(openParams);
                }

                if ("{[_FORWARD]}".includes("YES")) //FORWARD
                {
    3                  openParams  = initGlobal; 

                    if ("{[_FORWARDRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-forward \n"; //Forward   
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=INPUT:EMAIL ATTR=ID:_to_input_ CONTENT=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-forwar  4d \n"; //Forward  
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=INPUT:EMAIL ATTR=ID:_to_input_ CONTENT=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                        openParams += "wait seconds=0.5 \n";
                    }

                    iimPlay(openParams);
                }

                if ("{[_READ]}".includes("NO")) //Archive
                {
                    openParams  = initGlobal; 
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:More&&data-test-id:message-toolbar-more \n"; //Archive
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Archive \n"; //Archive
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);
  5
                    rfrch++;

                    if (rfrch == 5)
                    {
                        rfrch = 0;

                        openParams  = initGlobal; 
                        openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
                        openParams += "WAIT SECONDS=6\n";
                        iimPlay(openParams);
                    }
                }

                openParams  = initGlobal; 
                openParams += "wait seconds=2 \n";
                iimPlay(openParams);
            }
            else
            {
                boc = nmbrinbox;
            }
        }
    }
    else
    {
        rfrch = 0;
        for (boc = 1; boc < 10;boc++)
        {
            openParams  = initGlobal2;
            openParams += "TAG XPATH=\"(//a[contains(@class,'D_F ek_BB gl_C em_N o_h')])[1]\" \n"; //Select first message
            openParams += "wait seconds=1.5 \n";
            crl         = iimPlay  6(openParams);

            if (crl > 0)  
            {
                boc = 1;
                
                if ("{[_STAR]}".includes("YES")) //STAR
                {
                    openParams  = initGlobal; 

                    if ("{[_STARRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:This<sp>message<sp>is<sp>not<sp>starred \n"; //Star
                            openParams += "wait seconds=0.5 \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:This<sp>message<sp>is<sp>not<sp>starred \n"; //Star
                        openParams += "wait seconds=0.5 \n";
                    }

                    iimPlay(openParams);
                }

     7             if ("{[_CLICKLINK]}".includes("YES")) //CLICK LINK
                {
                    openParams  = initGlobal; 

                    if ("{[_CLICKLINKRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&href:* \n"; //CLICK LINK
                            openParams += "wait seconds={{!VARRANDOM}} \n";
                            openParams += "TAB T=1 \n";   
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAB CLOSEALLOTHERS \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&href:* \n"; //CLICK LINK  
                        openParams += "wait seconds={{!VARRANDOM}} \n";
                      8    openParams += "TAB T=1 \n";   
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAB CLOSEALLOTHERS \n";
                    }

                    iimPlay(openParams);
                }

                if ("{[_REPLY]}".includes("YES")) //REPLY
                {
                    openParams  = initGlobal; 

                    if ("{[_REPLYRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-reply \n"; //Reply 
                            openParams += "wait seconds=0.5 \n";
                            openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][aria-multiline ='true']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                            openParams += "wait seconds=0.5 \n";
              9                openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-reply \n"; //Reply 
                        openParams += "wait seconds=0.5 \n";
                        openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][aria-multiline ='true']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                        openParams += "wait seconds=0.5 \n";
                    }

                    iimPlay(openParams);
                }

                if ("{[_FORWARD]}".includes("YES")) //FORWARD
                {
                    openParams  = initGlobal;   :

                    if ("{[_FORWARDRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-forward \n"; //Forward   
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=INPUT:EMAIL ATTR=ID:_to_input_ CONTENT=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-forward \n"; //Forward  
                          ;openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=INPUT:EMAIL ATTR=ID:_to_input_ CONTENT=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                        openParams += "wait seconds=0.5 \n";
                    }

                    iimPlay(openParams);
                }

                if ("{[_READ]}".includes("NO")) //Archive
                {
                    openParams  = initGlobal; 
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:More&&data-test-id:message-toolbar-more \n"; //Archive
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Archive \n"; //Archive
                    openParams += "wait seconds=1 \n";
                    iimPlay(openParams);

                    rfrch++;

                        if (rfrch == 5)
                    {
                        rfrch = 0;

                        openParams  = initGlobal; 
                        openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
                        openParams += "WAIT SECONDS=6\n";
                        iimPlay(openParams);
                    }
                }

                openParams  = initGlobal; 
                openParams += "wait seconds=2 \n";
                iimPlay(openParams);
            }
            else
            {
                boc = 10;
            }
        }
    }

    openParams  = initGlobal; 
    openParams += "TAB CLOSE \n";       
    iimPlay(openParams);
}
else
{  
  openParams  = initGlobal;
  openParams +="ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
  openParams +="SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=reporting_spam_error_yahoo.txt\n";
  openParams +="TAB CLOSE\n";
  iimPlay(openParams);  
}MOBILE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ��&, C��sYAHOOREPORTING SPAM/INBOX MOBILEvar initGlobal,initGlobal2,openParams,boc,fnd,crl,rfrch,t,scriptsrch;

initGlobal    = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 6 \n";
initGlobal   += "SET !TIMEOUT_PAGE 1 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "SET !REPLYMESSAGE EVAL(\"var options = [{[REPLYMESSAGE]}]; var string = ''; for (var i = 0; i < 1; i++) { string += options[parseInt(  (  > "URL GOTO=https://mail.yahoo.com/m/search/keyword=folder%253A6%2520{[_SEARCH]}?.src=ym&reason=mobile \n";
openParams += "WAIT SECONDS=2 \n";  
openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
openParams += "WAIT SECONDS=15\n";
iimPlay(openParams);

openParams = initGlobal;
openParams +="SET !EXTRACT null\n";
openParams +="SET !EXTRACT {{!URLCURRENT}}\n";
openParams +="wait seconds=1\n";
iimPlay(openParams);
var crl=iimGetLastExtract();
if (crl.includes("https://mail.yahoo.com/m/"))
{
    openParams  = initGlobal2;  
    openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:\"Welcome to Yahoo Mail!\" \n"; 
    crl = iimPlay(openParams);

    if (crl > 0) 
    {
        openParams = initGlobal;
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n"; 
        openParams += "wait seconds=0.5 \n"; 
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Not<sp>now \n"; 
        openParams += "wait seconds=0.5 \n"; 
        openParams += "TAG POS=1 TYPE=BUTTO  ?N ATTR=TXT:Next \n"; 
        openParams += "wait seconds=0.5 \n"; 
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n"; 
        openParams += "wait seconds=0.5 \n"; 
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Take<sp>me<sp>to<sp>my<sp>inbox \n"; 
        openParams += " \n"; 
        iimPlay(openParams);
    }

    //REPORTING SPAM
    if ("{[_ACTIONNUMBER]}".includes("YES")) //Number of actions
    {
        var nmbr = "{[_NUMBERACTION]}"; fnd = 0;

        for (boc = 0; boc < nmbr;boc++)
        {
            openParams  = initGlobal2;
            openParams += "TAG POS=1 TYPE=BUTTON ATTR=title:checkbox&&data-test-id:icon-btn-checkbox&&aria-checked:false \n"; //Mark the first message without reading it
            crl = iimPlay(openParams);

            if (crl > 0)  
            {
                fnd = 1;

                if ("{[_SELECTALL]}".includes("NO")) //One by one
                {
                    openParams  = initGlobal; 

                 @     openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:More \n"; //More
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:This<sp>is<sp>not<sp>spam \n"; //This is not spam
                    openParams += "wait seconds=1 \n";
                    iimPlay(openParams);
                }
            }
            else
            {
                boc = nmbr;
            }
        }

        if ("{[_SELECTALL]}".includes("YES") && fnd == 1) //Select all msgs
        {
            openParams  = initGlobal; 
            openParams += "wait seconds=0.5 \n";
            openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:More \n"; //More
            openParams += "wait seconds=0.5 \n";
            openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:This<sp>is<sp>not<sp>spam \n"; //This is not spam
            openParams += "wait seconds=1 \n";
            iimPlay(openParams);
   A       }
    }
    else
    {
        fnd = 0;
        //REPORTING NORMAL SPAM
        for (boc = 1; boc < 10;boc++)
        {
            openParams  = initGlobal2;
            openParams += "TAG POS=1 TYPE=BUTTON ATTR=title:checkbox&&data-test-id:icon-btn-checkbox&&aria-checked:false \n"; //Mark the first message without reading it
            crl = iimPlay(openParams);

            if (crl > 0)  
            {
                fnd = 1; boc = 1;

                if ("{[_SELECTALL]}".includes("NO")) //One by one
                {
                    openParams  = initGlobal; 

                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:More \n"; //More
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:This<sp>is<sp>not<sp>spam \n"; //This is not spam
                    openParams += "wait seconds=1 \n";
                    iimPlay(openParams);
                    }
            }
            else
            {
                boc = 10;
            }
        }

        if ("{[_SELECTALL]}".includes("YES") && fnd == 1) //Select all msgs
        {
            openParams  = initGlobal; 
            openParams += "wait seconds=0.5 \n";
            openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:More \n"; //More
            openParams += "wait seconds=0.5 \n";
            openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:This<sp>is<sp>not<sp>spam \n"; //This is not spam
            openParams += "wait seconds=1 \n";
            iimPlay(openParams);
        }
    }

    openParams  = initGlobal; 
    openParams += "TAB CLOSE \n";       
    iimPlay(openParams);
}
else
{  
  openParams  = initGlobal;
  openParams +="ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
  openParams +="SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=reporting_spam_error_yahoo.txt\n";
  openParams +="TAB CLOSE\n";
  iimPlay(openParams);  
}MOBILE    L  L                                                                  �-
 7�gYAHOOREPORTING SPAM MOBILEvar initGlobal,initGlobal2,openParams,boc,fnd,crl,rfrch,t,scriptsrch;

initGlobal    = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 6 \n";
initGlobal   += "SET !TIMEOUT_PAGE 1 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "SET !VARRANDOM EVAL(\"var min = 2; var max = 6; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\") \n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n'; 

initGlobal2   = "CODE:";
initGlobal2  += '{[AGENT]}\n';
initGlobal2  += "SET !TIMEOUT_STEP 6 \n";
initGlobal2  += "SET !TIMEOUT_PAGE 1 \n";
initGlobal2  += "{[PROXY_IP]} \n";
initGlobal2  += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";

openParams +=  =  D
initGlobal2  += "SET !TIMEOUT_STEP 6 \n";
initGlobal2  += "SET !TIMEOUT_PAGE 1 \n";
initGlobal2  += "{[PROXY_IP]} \n";
initGlobal2  += '{[PROXY_LOGIN]} \n'; 

openParams = initGlobal;
openParams += "TAB OPEN \n";
openParams += "TAB T=2\n";
openParams += "TAB CLOSEALLOTHERS\n";

openParams += "URL GOTO=https://mail.yahoo.com/m/search/keyword=folder%253A1%2520{[_SEARCH]}?.src=ym&reason=mobile \n";
openParams += "WAIT SECONDS=2 \n";  
openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
openParams += "WAIT SECONDS=15\n";
iimPlay(openParams);

openParams = initGlobal;
openParams +="SET !EXTRACT null\n";
openParams +="SET !EXTRACT {{!URLCURRENT}}\n";
openParams +="wait seconds=1\n";
iimPlay(openParams);
var crl=iimGetLastExtract();
if (crl.includes("https://mail.yahoo.com/m/"))
{
    openParams  = initGlobal2;  
    openParams += "TAG POS=1 TYPE=DIV ATTR=TXT:\"Welcome to Yahoo Mail!\" \n"; 
    crl = iimPlay(openParams);

    if (crl > 0) 
    {
        E  openParams = initGlobal;
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n"; 
        openParams += "wait seconds=0.5 \n"; 
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Not<sp>now \n"; 
        openParams += "wait seconds=0.5 \n"; 
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n"; 
        openParams += "wait seconds=0.5 \n"; 
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Next \n"; 
        openParams += "wait seconds=0.5 \n"; 
        openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Take<sp>me<sp>to<sp>my<sp>inbox \n"; 
        openParams += " \n"; 
        iimPlay(openParams);
    }

    //REPORTING INBOX
    if ("{[_ACTIONNUMBER]}".includes("YES")) //Number of actions
    {
        var nmbrinbox = "{[_NUMBERACTION]}"; rfrch = 0;

        for (boc = 0; boc < nmbrinbox;boc++)
        {
            openParams  = initGlobal2;
            openParams += "TAG XPATH=\"(//a[contains(@class,'D_F ek_BB gl_C em_N o_h')])[1]\" \n"; //Select first messa  Fge
            openParams += "wait seconds=1.5 \n";
            crl         = iimPlay(openParams);

            if (crl > 0)  
            {
                if ("{[_STAR]}".includes("YES")) //STAR
                {
                    openParams  = initGlobal; 

                    if ("{[_STARRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:This<sp>message<sp>is<sp>not<sp>starred \n"; //Star
                            openParams += "wait seconds=0.5 \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:This<sp>message<sp>is<sp>not<sp>starred \n"; //Star
                        openParams += "wait seconds=0.5 \n";
                    }

                    iim  GPlay(openParams);
                }

                if ("{[_CLICKLINK]}".includes("YES")) //CLICK LINK
                {
                    openParams  = initGlobal; 

                    if ("{[_CLICKLINKRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&href:* \n"; //CLICK LINK
                            openParams += "wait seconds={{!VARRANDOM}} \n";
                            openParams += "TAB T=1 \n";   
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAB CLOSEALLOTHERS \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&href:* \n"; //CLICK LINK  
                        openParams += "wait second  Hs={{!VARRANDOM}} \n";
                        openParams += "TAB T=1 \n";   
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAB CLOSEALLOTHERS \n";
                    }

                    iimPlay(openParams);
                }

                if ("{[_REPLY]}".includes("YES")) //REPLY
                {
                    openParams  = initGlobal; 

                    if ("{[_REPLYRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-reply \n"; //Reply 
                            openParams += "wait seconds=0.5 \n";
                            openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][aria-multiline ='true']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                            openPar  Iams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-reply \n"; //Reply 
                        openParams += "wait seconds=0.5 \n";
                        openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][aria-multiline ='true']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                        openParams += "wait seconds=0.5 \n";
                    }

                    iimPlay(openParams);
                }

                if ("{[_FORWARD]}".includes("YES")) //FORWARD
                {
     J                 openParams  = initGlobal; 

                    if ("{[_FORWARDRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-forward \n"; //Forward   
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=INPUT:EMAIL ATTR=ID:_to_input_ CONTENT=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-forward  K \n"; //Forward  
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=INPUT:EMAIL ATTR=ID:_to_input_ CONTENT=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                        openParams += "wait seconds=0.5 \n";
                    }

                    iimPlay(openParams);
                }

                if ("{[_READ]}".includes("NO")) //Archive
                {
                    openParams  = initGlobal; 
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:More&&data-test-id:message-toolbar-more \n"; //Archive
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Archive \n"; //Archive
                    openParams += "wait seconds=0.5 \n";
                    iimPlay(openParams);

  L                    rfrch++;

                    if (rfrch == 5)
                    {
                        rfrch = 0;

                        openParams  = initGlobal; 
                        openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
                        openParams += "WAIT SECONDS=6\n";
                        iimPlay(openParams);
                    }
                }

                openParams  = initGlobal; 
                openParams += "wait seconds=2 \n";
                iimPlay(openParams);
            }
            else
            {
                boc = nmbrinbox;
            }
        }
    }
    else
    {
        rfrch = 0;
        for (boc = 1; boc < 10;boc++)
        {
            openParams  = initGlobal2;
            openParams += "TAG XPATH=\"(//a[contains(@class,'D_F ek_BB gl_C em_N o_h')])[1]\" \n"; //Select first message
            openParams += "wait seconds=1.5 \n";
            crl         = iimPlay(  MopenParams);

            if (crl > 0)  
            {
                boc = 1;
                
                if ("{[_STAR]}".includes("YES")) //STAR
                {
                    openParams  = initGlobal; 

                    if ("{[_STARRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:This<sp>message<sp>is<sp>not<sp>starred \n"; //Star
                            openParams += "wait seconds=0.5 \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=BUTTON ATTR=aria-label:This<sp>message<sp>is<sp>not<sp>starred \n"; //Star
                        openParams += "wait seconds=0.5 \n";
                    }

                    iimPlay(openParams);
                }

      N            if ("{[_CLICKLINK]}".includes("YES")) //CLICK LINK
                {
                    openParams  = initGlobal; 

                    if ("{[_CLICKLINKRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&href:* \n"; //CLICK LINK
                            openParams += "wait seconds={{!VARRANDOM}} \n";
                            openParams += "TAB T=1 \n";   
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAB CLOSEALLOTHERS \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=A ATTR=target:_blank&&href:* \n"; //CLICK LINK  
                        openParams += "wait seconds={{!VARRANDOM}} \n";
                       O   openParams += "TAB T=1 \n";   
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAB CLOSEALLOTHERS \n";
                    }

                    iimPlay(openParams);
                }

                if ("{[_REPLY]}".includes("YES")) //REPLY
                {
                    openParams  = initGlobal; 

                    if ("{[_REPLYRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-reply \n"; //Reply 
                            openParams += "wait seconds=0.5 \n";
                            openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][aria-multiline ='true']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                            openParams += "wait seconds=0.5 \n";
               P               openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-reply \n"; //Reply 
                        openParams += "wait seconds=0.5 \n";
                        openParams += "EVENTS TYPE=KEYPRESS SELECTOR=\"div[role='textbox'][aria-multiline ='true']\" CHARS=\"{[!REPLYMESSAGE]}\" \n"; //Reply msg  
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                        openParams += "wait seconds=0.5 \n";
                    }

                    iimPlay(openParams);
                }

                if ("{[_FORWARD]}".includes("YES")) //FORWARD
                {
                    openParams  = initGlobal;   Q

                    if ("{[_FORWARDRANDOM]}".includes("YES"))
                    {
                        t=Math.floor(Math.random() * 2) + 1;
                        if(t == 1)
                        {
                            openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-forward \n"; //Forward   
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=INPUT:EMAIL ATTR=ID:_to_input_ CONTENT=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                            openParams += "wait seconds=0.5 \n";
                            openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                            openParams += "wait seconds=0.5 \n";
                        }
                    }
                    else
                    {
                        openParams += "TAG POS=1 TYPE=BUTTON ATTR=data-test-id:message-toolbar-forward \n"; //Forward  
                        o  RpenParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=INPUT:EMAIL ATTR=ID:_to_input_ CONTENT=\"{[_EMAILFORWARD]}\" \n"; //Forward email  
                        openParams += "wait seconds=0.5 \n";
                        openParams += "TAG POS=1 TYPE=SPAN ATTR=TXT:Send \n"; //Send msg
                        openParams += "wait seconds=0.5 \n";
                    }

                    iimPlay(openParams);
                }

                if ("{[_READ]}".includes("NO")) //Archive
                {
                    openParams  = initGlobal; 
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:More&&data-test-id:message-toolbar-more \n"; //Archive
                    openParams += "wait seconds=0.5 \n";
                    openParams += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Archive \n"; //Archive
                    openParams += "wait seconds=1 \n";
                    iimPlay(openParams);

                    rfrch++;

                        if (rfrch == 5)
                    {
                        rfrch = 0;

                        openParams  = initGlobal; 
                        openParams += "EVENT TYPE=KEYPRESS CHAR=\"r\" MODIFIERS =\"ctrl + shift\" \n";  
                        openParams += "WAIT SECONDS=6\n";
                        iimPlay(openParams);
                    }
                }

                openParams  = initGlobal; 
                openParams += "wait seconds=2 \n";
                iimPlay(openParams);
            }
            else
            {
                boc = 10;
            }
        }
    }

    openParams  = initGlobal; 
    openParams += "TAB CLOSE \n";       
    iimPlay(openParams);
}
else
{  
  openParams  = initGlobal;
  openParams +="ADD !EXTRACT {[CURRENT_PROFILE]},{[CURRENT_DATE]} \n";
  openParams +="SAVEAS TYPE=EXTRACT FOLDER={[LOGS_DIRECTORY]} FILE=reporting_inbox_error_yahoo.txt\n";
  openParams +="TAB CLOSE\n";
  iimPlay(openParams);  
}MOBILE    �  �                                                                                                                                                                     ��	. 9��CYAHOOREPORTING INBOX MOBILEvar initGlobal,initGlobal2,openParams,boc,fnd,crl,rfrch,t,scriptsrch;

initGlobal    = "CODE:";
initGlobal   += "SET !ERRORIGNORE YES \n";
initGlobal   += '{[AGENT]}\n';
initGlobal   += "SET !TIMEOUT_STEP 6 \n";
initGlobal   += "SET !TIMEOUT_PAGE 1 \n";
initGlobal   += "SET !WAITPAGECOMPLETE YES\n";
initGlobal   += "SET !REPLYMESSAGE EVAL(\"var options = [{[REPLYMESSAGE]}]; var string = ''; for (var i = 0; i < 1; i++) { string += options[parseInt(Math.random() * options.length)]}; string\") \n";
initGlobal   += "SET !VARRANDOM EVAL(\"var min = 2; var max = 6; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\") \n";
initGlobal   += "{[PROXY_IP]} \n";
initGlobal   += '{[PROXY_LOGIN]} \n'; 

initGlobal2   = "CODE:";
initGlobal2  += '{[AGENT]}\n';  C