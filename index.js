module.exports = require('./lib/groundskeeper');

/**
 *                              `,:,`
 *                           .+``````,@
 *                         `:``.+#,,,,`.:   ,''`
 *                        #``.,#,+,#,',,`@@:,:,@`
 *                       #``@,#:'#,:;;,,,`#:::,,:#
 *                .;` '##``@;#::#::;#'::,,`;:;;;;;+             :+:,.,';
 *                ::,+.,;.;,#::;;;;;'@:,,,,:;;;;;'#'           '```,,,,,#
 *                :;;;;@;'+,;,;;;+#,,,,,,,,#;;;;;;+           :````,,,,,,@
 *               #:;#;;;:;;;;;;@:,,,,,,,,,,;;;;;;;;;          +:#``,,,,,,,'
 *                #';:;;;;;;;#,,,,,,,,,,,,#;;;;''''+          '```,,,,,,,,,
 *              +,:,:;;;;;;#,,,,,,;#+,,,,';;;'''''''         :``.,,,,,,,,,:#
 *              :##';@''+#',,,,,#@  :,,,,';;'#++'''+        ````,,,,,,,,,,:,`
 *                  +,,,,,,,,,#`+@  :,,,,;;;;,,,+'.`        ``+`,,,,,,,,,,::#
 *                 ,,,,,,;,+#`      ,,,,,;;#,,#,++           #`,,,,,,,,,,,,::
 *                  ##@#;:,,;      #,,,,,;;+,:;,'            .,,,,,,,,,,,,,:,
 *                  . @+ `.,:.   `+,,;#',';+,',;#           #`,,,,,,,,,,,,,::'
 *                  `    @.,,,'+;,,:+;+;#'';'@:,            @.,,,,,,,,,,,,,,:,`
 *                  @   #`.,,,+:+,#;;;';;;;;;''@            ``,',;,,,,,,,,,,,::
 *                   :##``,,,,,,,#;;;;;;;;;;;;'''            `#+,+,,,,,,,,,,,::#
 *                   @```.,,,,,,#;;;;'#@'@#;;;;''                 #:,,,,,,,,,,:,,
 *                  '```,,,,,+,#;;;+;;.  @@@;;;''#                 :,,,,,,,,,,::;
 *                 @```,,,,,;,+;;;#,# : :@@@@;;'++                  #,,,,,,,,,,::+
 *                 #``,,,,,,+';;;;,@  @@@@@@@;;;',                  `,,,,,,,,,,:::
 *                 ;`.,,,,,#;;;;:,#  '@@@@@++;;;'.                   @,,,,,,,,,,::'@
 *                  @`,,,;+;;;;;,+,,:@@+;#;;+;;'',                    ,,,,,,,,,,:,#'
 *   ,##          @#:;#@#;;;;;;,+ .,,@@:::;#;;;'''..                  @,,,,,,,,,#::`
 *  +''''          ##::;;'';+,,#   @';;;;;;;;;''':``,,                `,,,,,,,,,,,'#:`
 * `''+++.      +;,,::;'#,#:;#,   ';;;;;;;;;;''@+:@```'##+             #,,,,,,,,:#++,
 * `''+++#       @'++',,,,,,,@   ';;;;;;;;;'''#,':,:``.;'',`,+, .+#+#:##,,,,,,,,,,:,,
 *  +++++#      `,,,,,:,,,,;:   .;';;;;''''''+,::::,```#;,````@````#``:`+,,,,,,,,,:'#
 *  @+++++       @,,,,,#,,      , #;'+''''''#:::,::;```++````#`````.`'``+,,,,,,,,',:+
 *  :'++++        `'+'`           #;,+'#,'#;::,,,,:@```.``````````+``#```:,,,,,,,,,::
 *   '++++.                       `; `@@,:::,,,,,,,.`````.``'`````@``````#,,,,,,,,,::
 *   '+++++                            `@,,,,,,,,,@`````..``@`````+``````;,,,,,,,,,::
 *   +++++#                           @``+,,,,,,,+``````,.``#`````+``````:,,,,,,,,,:'
 *   #+++++                          .:```:,,,,,'```````:.``#`````#``````+,,,,,,,,,::
 *   ,'++++                          ,`````:,,,#````````,.``#`````+``````+,,,,,,,,:@
 *    '++++.                        ,.````` #@::@##.````,.``.`````.```````:,,,,,,,#
 *    '++++#                        ::```#+.+'+`...'#,``..```;`````;``..``;',,,:@`
 *    +++++#                       . ;``#'+....````+''#`..```,`....;.........'
 *    #+++++                       +`;`#'''````````#'+;```````'#':,,@`.',...,
 *    ,+++++                         ,,'';;````````++;;,```````...   .+. :+:
 *     '++++.                     @```:'@;+````` `,+;;;#'#``````..#
 *     '++++#                     ````.#;;;@++''';';;;;#''``````..`
 *     #++++#                    ;  ```#;;;#''''''''#;;'';```````..#
 *     #+++++                    , ````++;;#'''''''''+'''''``````...
 *     .+++++                   :  ````#'##'''''''''''''''#``````...+
 *      '++++.                `'#  ````#'''';;;;;;''+###'';```````..;
 *      '+++++                   `#````:'''#;;;;;';'''''''':``````..`
 *      #++++#              #'@,```#````'''#'''''#'''''''''#``````...@
 *      ++++++             '` ``#```#`..+''''''''#''''''+'';``````...#;
 *      .++++#;,#`         +` ```;+``@..#'';''''''''''''#'''#`````...:'
 *       '+++`````.    `,#@+,`.```+#``;.,;''#'''';;'''''+''';`````....':
 *       +++@``,,`.`````````,,,.```,'`,`.'''''''''''''''+''''#`````..`'#
 *      :#++#`,,,,,`````.,,,,,,;```+``.+.@'''+''''#'''''+''''';````..`''
 *     +,;###.,,,,,,.,,,,,,,,,,,#`````.:`:'''';''''''''''''''''````..`''
 *    `,,,,,+,,,,:,,,,,,,,,,,,,,:`````.`: +'''#''''''''#''''''''```..,++.
 *    `,,,,,:,,,,,,,,,,,,,,,,,,::;```..`` '''';#;''#''+''''''''''`...@++;
 *     +,,,::@,,@,,,,,,,,,,,,,:::#``.... `;''''''###''''''''''''';#+#+++'
 *     `#'::;+::,;:;,,,,,,,,,::::+...,.,  @'''''''''''''''''''''''''+++++#
 *     +,,,,,,,,:+,,,,,,,,:::::::+..`#   .;''''''''''''''''''''''''''++++'
 *     ,,,,,,,,::;,,::::::::::,:+@..#    +'''''''''''''''''''''''''''+++++'
 *      ;:,,,:::##,:+:::,,:+@;` #;;@    ;;''''''''''''''''''''''''''''+++++
 *       #,,:,;+:,,:@+'.`               +'''''''''''''''''''''''''''''++++'
 *       ,,:::,::,,@                    ;''''''''''''''''''''''''''''''++++:
 *       ':::::::@                     :;''''''''''''''''''''''''''''''++++#
 *        +,::,:#                      @;''''''''''''''''''''''''''''''++++@
 *         `##+++,                     #;''''''''''''''''''''''''''''''++++#
 *          +++++#                     #;''''''''''''''''''''''''''''''+++++
 *          #++++#                     #;''''''''''''''''''''''''''''''++++#
 *          #+++++                     @;''''''''''''''''''''''''''''''++++@
 *          ,+++++                     ;;''''''''''''''''''''''''''''''++++;
 *           +++++,                     ;;''''''''''''''''''''''''''''++++'
 *           +++++#                     #;''''''''''''''''''''''''''''+++++
 *           #++++#                     `;''''''''''''''''''''''''''''+++++
 *           ++++++                      @;''''''''''''''''''''''''''++++'
 *           ,+++++                     ,;;''''''''''''''''''''''''''++++#
 *            +++++.                    ';'''''''''''''''''''''''''''+++'`
 *            +++++#                   @;;''''''''''''''''''''''''''+++++
 *            #++++#                  `;;'''''''''''''''''''''''''''++++#
 *            ++++++                  #;;'''''''''''+;;'''''''''''''+++'`
 *            .+++++                 `;;''''''''''''+''@..,;'''''''++++'
 *             +++++.                #;''''''''''''+++'   +''''''''++++#
 *             #++++'                ;;'''''''''''++++;  .'''''''''++++'
 *             #++++#               @;;'''''''''''++++   #'''''''''+++'`
 *             :+++++               ';'''''''''''++++.   ;''''''''++++'
 *             `+++++              .;;'''''''''''+++#   #'''''''''+++++
 *              +++++.             #;;''''''''''++++,   +'''''''''++++@
 *              #+++++             ';'''''''''''++++    ;'''''''''++++'
 *              +++++#            `;;'''''''''''+++#   ;''''''''''+++',
 *              `+++++            :;;''''''''''+++'    @''''''''''+++'
 *               +++++ .;@##@@;`  +;;''''''''''++++    +''''''''''+++'
 *               +++++:.:;'++':,  #;'''''''''''+++#    '''''''''''++++
 *            :@:+#+@,,::::::::,: ';'''''''''''+++'    '''''''''''++++
 *         .#,,',,,,,,,:::::::::# .;'''''''''''+++;    '''''''''''+++'
 *       ';.+::,,,,,,,,::::::::::  ;'''''''''''++++    +''''''''''+++'
 *     `;,#,:,:,,#,,,,,:::::::::,  ''''''''''''+++#    #''''''''''+++'`
 *     #;,,,,,,,,,:,,,,:::::::::,, @'''''''''''++++    #''''''''''++++'
 *     #,,,,,,,,,:+,,,,:::::::::,+ ;'''''''''''+++'`   .'''''''''''+++#
 *     @,:,,,,,,,:,,,,,:::::::::,#  ;'''''''''''+++#    '''''''''''++++
 *     :,,,,,,,,,,:#,,,::::::::::+  +'''''''''''++++;   @'''''''''''++'`
 *     `,,,,,,,,,,:;,,,;:::::::::'  @''''''''''''++''#  ,'''''''''''+++@
 *      :,,,,,,,,,,,,,,#:::::::::; ,'';''''''';'+#+'++   '''''''''''++++
 *      #,,,,,,,,,:,;,,@:::::::::; #';''+###+'';'+++++   #'''''''''''+++'
 *      ;,:,,,,,,,,:+,,+:::::::::' `;''''''''''''++++#   #''''''''''''++++
 *       ,,,,,,,,,,:,,,,:::::::::'  @''''''''''''++++#  ,'@';'''''''';+@++#
 *       #,,,,,,,,,,,,,,:::::::::+  `;'''''''''''+++++. @'';'+#@#@@@#+'+++'
 *       ,,:,,,,,,,,:,,,+:::::::,#  ,''''''''''''+++++# ,;'''''''''''''+++.
 *        ;,:,,,,,,,,,,,':::::::,'  +'''''''''''''++++#  @'''''''''''''+++;
 *        +,,,,,,,,,,,,,,:::::::,`  .;''''''''''''+++'+   '''''''''''''+++'`
 *         ;,,,,,,,,:,,,,:::::::,  ``:#''''''''''+'+@@@   ''''''''''''''+++@
 *         :,:,,,,,,,,,,,:::::::#';;;;'#@@#+++##@@@@@@@   ;''''''''''''''++#
 *          #,,,,,,,,,,,,,:::::#;;;;;;;;:#@@@@@@@@@@@@@+  #''''''''''''''+':
 *           ,,:,,,,,,,,,,::::@;;;;;;+@@@@@@@@@@@@@@@@@@ `;@@@#+;'''''''+@@+
 *           .,,,,,,,,,,,,::::;;;;;+@@@@@@@@@@@@@@@@@@@@+;;;;;;;;##@@@@@@@@@
 *            ',,,,,,:,,,,:::+;;;;+@@@@@@@@@@@@@@@@@@@@;;;;;;;;''';@@@@@@@@@#
 *             +,,,:,:,,,,,::@;;;;@@@@@@@@@@@@@@@@@@@@;;;;;;@@@@@@@@@@@@@@@@@
 *             '',,,,,,,,,,,,@;;;#@@@@@@@@@@@@@@@@@@@;;;;;#@@@@@@@@@@@@@@@@@@
 *               `#+:+:;:@#. @;;;@@@@@@@@@@@@@@@@@@@@;;;;#@@@@@@@@@@@@@@@@@@@
 *             ,,    ``      ;;;;@@@@@@@@@@@@@@@@ #@@;;;;@@@@@@@@@@@@@@@@@@@@
 *                            ;+;@@@@@@@@@@@@@@@  :@@;;;;@@@@@@@@@@@@@@@@@@@@
 *                               ;@@@@@@@@@@@+.     #;;;'@@@@@@@@@@@@@@@;@@@@
 *                                                   ;;;'@@@@@@@@@@@@@@ .@@.
 *                                                    #+;@@@@@@@@@@@@'
 */
