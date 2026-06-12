import chalk from 'chalk';
import figlet from 'figlet';

console.log(`
${chalk.hex('#FFFFFF')(`
                                     .                          
                                     M                          
                                    dM                          
                                    MMr                         
                                   4MMML                  .     
                                   MMMMM.                xf     
                   .              "MMMMM               .MM-     
                    Mh..          +MMMMMM            .MMMM      
`)}${chalk.hex('#0036A7')(`                    .MMM.         .MMMMML.          MMMMMh      
                     )MMMh.        MMMMMM         MMMMMMM       
                      3MMMMx.     'MMMMMMf      xnMMMMMM"       
                      '*MMMMM      MMMMMM.     nMMMMMMP"        
                        *MMMMMx    "MMMMM\\    .MMMMMMM=         
                         *MMMMMh   "MMMMM"   JMMMMMMP           
                           MMMMMM   3MMMM.  dMMMMMM            .
                            MMMMMM  "MMMM  .MMMMM(        .nnMP"
                =..          *MMMMx  MMM"  dMMMM"    .nnMMMMM*  
`)}${chalk.hex('#D62718')(`                  "MMn...     'MMMMr 'MM   MMM"   .nMMMMMMM*"   
                   "4MMMMnn..   *MMM  MM  MMP"  .dMMMMMMM""     
                     ^MMMMMMMMx.  *ML "M .M*  .MMMMMM**"        
                        *PMMMMMMhn. *x > M  .MMMM**""           
                           ""**MMMMhx/.h/ .=*"                  
                                    .3P"%....                   
                                  nP"     "*MMnx                
`)}
`);

console.log(chalk.white('  Читай документацию ') + chalk.cyan('https://github.com/otmozorok/ui'));
console.log(chalk.cyan(figlet.textSync('otmozorok CLI')));
