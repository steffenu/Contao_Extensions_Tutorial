<?php

declare(strict_types=1);

/*
 * This file is part of Starter Bundle.
 *
 * (c) Steffen Unger 2021 <steffen.development@gmail.com>
 * @license GPL-3.0-or-later
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed with this source code.
 * @link https://github.com/steffenu/starter-bundle
 */

namespace Steffenu\StarterBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Twig\Environment as TwigEnvironment;
use Doctrine\DBAL\Connection;


class MyCustomController extends AbstractController
{
    /**
     * @var TwigEnvironment
     */
    private $twig;

    /**
     * MyCustomController constructor.
     */
    public function __construct(TwigEnvironment $twig , Connection $db)
    {
        $this->twig = $twig;
        $this->db = $db;

    }

    public function SelectedFontsFromKit($kitName){

        // DB
        $queryBuilder = $this->db->createQueryBuilder();
        $queryBuilder->select('*')->from('tl_backend_starter');
        $stm = $queryBuilder->execute();
        $data = $stm->fetchAllAssociative();

        // Current Kit bsp Salsarico
        //$kitname = $data[0]['selectField'];

        // Single kit Object
        $kitobject = $this->KitByName($kitName);
        dump($kitobject);

        // Getting the kit it to retrieve the css from typekit via
        // https://use.typekit.net/{$kit_id}.css
        $kit_id = $kitobject['id'];
        //dump($kit_id);

        // families from kit object
        $kitobject_families = $kitobject['families'];
        dump($kitobject_families);

        // Database entry that has matching matching kitname from user input /preview/{Salsarico}
        foreach ($data as $key => $value) {
            if ($value['selectField'] == $kitName ) {

                // Selected fields from Database
                $html_tags = [
                    $value['heading_1'],
                    $value['heading_2'],
                    $value['heading_3'],
                    $value['heading_4'],
                    $value['heading_5'],
                    $value['heading_6'],
                    $value['paragraph'],
                    $value['strong']

                ];

                // names for object keys
                $html_tags_keys = [
                    'heading_1',
                    'heading_2',
                    'heading_3',
                    'heading_4',
                    'heading_5',
                    'heading_6',
                    'paragraph',
                    'strong'
               ];

                $new_html = [];
                $arrListitems = [];

                $index = 0;

                dump($html_tags);
                foreach ($html_tags as $key => $old_value) {


                    $teile = explode(":", $old_value);
                    $fontname = $teile[0]; // Interstate Condensed
                    $font_weight = $teile[1]; // 400

                    dump('INPUT : ' . $fontname);


                    // Pushes only Adobe Fonts (Fonts from kitobject_families)
                    $AdobeArray = $this->FontArrayAdobe($kitobject_families , $fontname ,$font_weight);

                    if (!empty($AdobeArray)) {
                        array_push($arrListitems, $AdobeArray);
                    }

                    // Pushes only google fonts (fonts not included in kitobject_families)
                    $GoogleArray = $this->createFontArray($arrListitems,$fontname,$font_weight);

                    if (!empty($GoogleArray)) {
                        array_push($arrListitems, $GoogleArray);
                    }

                    dump("## OUTPUT ##");
                    dump($FontValuesArray);
                    //dump($Listitems);



                    // key value pair
                    //$new_html[$html_tags_keys[$index]] = $Listitems;
                    //$index++;


                    //return $arrListitems;
            }
            dump('arrListitems');
            dump($arrListitems);
            return [$new_html];
        }

    }

    }



    // Alle Download links eines Google Fonts zu allen Variationen
    public function GoogleFontsDownloadLinks($html_definition){

        foreach ($html_definition[0] as $key => $value) {
          $fontname = $value['font']; // Advent Pro
        }
    }

    /**
     * @Route("/preview/{kitName}",
     *     defaults={"_scope": "frontend"}
     * )
     */
    public function myroute1($kitName)
    {



        // DB
        $queryBuilder = $this->db->createQueryBuilder();
        $queryBuilder->select('*')->from('tl_backend_starter');
        $stm = $queryBuilder->execute();
        $data = $stm->fetchAllAssociative();

        // Current Kit bsp Salsarico
        //$kitname = $data[0]['selectField'];

        // Single kit Object
        dump($kitName);
        $kitobject = $this->KitByName($kitName);
        dump($kitobject); // Correct $kitName

        $kit_id = $kitobject['id'];
        $adobe_css = 'https://use.typekit.net/'.$kit_id.'.css';



        // Getting the kit it to retrieve the css from typekit via
        // https://use.typekit.net/{$kit_id}.css


        $html_definition = $this->SelectedFontsFromKit($kitName);
        dump($html_definition);
        $this->GoogleFontsDownloadLinks($html_definition);

/*         $animals = [

            [
                'species' => 'dogs',
                'color'   => 'white'
            ],
            [
                'species' => 'birds',
                'color'   => 'black'
            ], [
                'species' => 'cats',
                'color'   => 'pink'
            ], [
                'species' => 'cows',
                'color'   => 'yellow'
            ],
        ]; */



        return new Response($this->twig->render(
            '@SteffenuStarter/MyCustom/fe_page.html.twig',
            [
                'html_definition' => $html_definition,
                'kit_id' => $kit_id,
                'adobe_css' => $adobe_css
            ]
        ));
    }


    public function KitByName($kitname)
    {
        dump($kitname);
        // ALL KITS
        $typekit = new \Mvpasarel\Typekit\TypekitClient('15ca9563e40e2e928a54842da8acd664a36d7061');
        $all_kit_ids = $typekit->getKits();
        //$data = json_decode($your_json_string, TRUE);
        //dump($all_kit_ids['kits']);

        foreach ($all_kit_ids['kits'] as $key => $value) {
            //dump($value['id']);
            // SINGLE KIT
            $single_kit = $typekit->getKit($value['id']);
            if ($kitname == $single_kit['kit']['name']) {
                //dump($kitname,$single_kit['kit']['id']);
                return $single_kit['kit'];
            }

        }

        //return new Response("ok");
    }



    /*
    Convert items bsp.:
    Interstate Condensed:800
    to
    <li style="font-family: interstate-condensed; font-weight:800"><h1>Heading 1</h1></li>
    // Needs Css name from KitObject
    */


    public function FontArrayGoogle($arrListitems , $fontname ,$font_weight){


        // fontname Interstate
        $FontArray_Google = [];


        foreach ($arrListitems as $key => $value) {


            // Interstate Condensed
            if ($value['name'] != $fontname) {
                dump(" ########### GOOGLE MATCH ########### " .  $fontname );


                $Listitems = [
                    'font' => $fontname,
                    'class' => 'google',
                    'weight' => $font_weight
                ];


                array_push($FontArray_Google, $Listitems);
            }
        return $FontArray;

        }
    }

    public function FontArrayAdobe($kitobject_families , $fontname ,$font_weight){



        $FontArray_Adobe = [];


        foreach ($kitobject_families as $key => $value) {

            //dump("VALUE");
            //dump($value);

            dump( $value['name']  . " UND " .  $fontname);
            // ADOBE FONT

            // Interstate Condensed
            if ($value['name'] === $fontname) {
                dump(" ########### ADOBE MATCH ########### " .  $fontname );
                $css_name = $value['css_names'][0];

                $Listitems = [
                    'font' => $css_name,
                    'class' => 'adobe',
                    'weight' => $font_weight
                ];


                array_push($FontArray_Adobe, $Listitems);
            }
        // Returns empty array if fontname is not in kitobject_families
        return $FontArray;

        }
    }

    public function createFontArray($kitobject_families , $fontname ,$font_weight){



        $FontArray = [];
        $FontArray_Google = [];
        dump('kitobject_families');
        dump($kitobject_families);

        // [Interstate Condensed , Interstate]
        // fontname = Interstate Condensed


/*         $FontArray = [            $Listitems = [
                'font' => interstate-condensed,
                'class' => 'adobe',
                'weight' => 400
                ];
           $Listitems = [
                'font' => Interstate,
                'class' => 'google',
                'weight' => 400
                ];
        ]; */


        foreach ($kitobject_families as $key => $value) {

            //dump("VALUE");
            //dump($value);

            dump( $value['name']  . " UND " .  $fontname);
            // ADOBE FONT

            // Interstate Condensed
            if ($value['name'] === $fontname) {
                dump(" ########### ADOBE MATCH ########### " .  $fontname );
                $css_name = $value['css_names'][0];

                $Listitems = [
                    'font' => $css_name,
                    'class' => 'adobe',
                    'weight' => $font_weight
                ];


                array_push($FontArray, $Listitems);
            } /* else {
                $Listitems = [
                    'font' => $fontname,
                    'class' => 'google',
                    'weight' => $font_weight
                ];
            } */

        }
/*         foreach ($kitobject_families as $key => $value) {



            dump( $value['name']  . " UND " .  $fontname);
            // ADOBE FONT

            // Interstate Conde
            if ($value['name'] != $fontname) {
                dump(" ########### GOOGLE MATCH ########### " .  $fontname );

                $Listitems = [
                    'font' => $fontname,
                    'class' => 'google',
                    'weight' => $font_weight
                ];



                array_push($FontArray_Google, $Listitems);
            }
            // GOOGLE FONT




        } */
        dump('FontArray_Google');
        dump($FontArray_Google);
        return $FontArray;


    }

    public function format_value($kitobject_families,$old_value){
                    /* // Wir schauen im Kit Object ob der Font den wir Formatieren
                    // wollen im Adobe Kit zu finden ist.
                    // Ansonsten gehen wir davon aus das es ein google font ist.
                    //dump("families",$kitobject_families);
                    foreach ($kitobject_families as $key => $value) {

                        // if Interstate Condensed == Interstate Condensed
                        // ADOBE FONT
                        dump($value['name'] . " " . $fontname . " vergleich");
                        if ($value['name'] == $fontname) {
                            dump($value['name'] . " " . $fontname . " ## ADOBE ## - match");
                            // becomes interstate-condensed
                            $css_name = $value['css_names'][0];
                            dump("cssname " . $css_name);

                            $Listitems = [
                                'font' => $css_name,
                                'class' => 'adobe',
                                'weight' => $font_weight
                            ];

                            dump("SET LIST ITEM");

                            //$list_item = 'class=adobe' . ' style=font-family:' . $css_name .";" .'font-weight:'. $font_weight . ';';
                            //return $list_item;
                            //return $arrListitems;


                        // GOOGLE FONT
                        } else{
                            dump($value['name'] . " " . $fontname . " DIFFERENT");
                            //dump($fontname);
                            $css_name = $fontname;

                                $Listitems = [
                                'font' => $css_name,
                                'class' => 'google',
                                'weight' => $font_weight
                            ];

                            //$list_item = 'class=google' . ' style=font-family:' .'"'. $css_name . "" . ";". 'font-weight:'. $font_weight . ';';
                            //return $list_item;
                            //return $arrListitems;
                        }
                    }

                    //return $arrListitems;

                    // returns array
                    //$new_value = $this->format_value($kitobject_families,$old_value);

                    dump($Listitems);
                    array_push($arrListitems, $Listitems);

                    // key value pair
                    $new_html[$html_tags_keys[$index]] = $Listitems;
                    $index++; */
                }

    }

