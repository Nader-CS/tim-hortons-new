"use client";
import { useLocale, useTranslations } from "next-intl";
import CountriesMap from "../map/CountriesMap";
import { useEffect, useState } from "react";
import Locations from "../locations/Locations";

const Countries = () => {
  const locale = useLocale();
  const t = useTranslations();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedBranches, setSelectedBranches] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState(null);
  const locations = [
    {
      country: "saudi",
      branches: [
        {
          region: t("abha"),
          locations: [
            {
              location: t("king_fahd_road_dt"),
              address: t("king_fahad_road_alarin_abha_6252"),
              phone: "+966 55 606 6125",
            },
          ],
        },
        {
          region: t("alkharj"),
          locations: [
            {
              location: t("warood_plaza"),
              address: t(
                "warood_plaza_king_abdulaziz_rd_al_burj_al_kharj_16278_saudi_arabia"
              ),
              phone: "+966 56 692 9774",
            },
          ],
        },
        {
          region: t("dammam"),
          locations: [
            {
              location: t("saudi_german_hospital_dammam"),
              address: t("al_amanah_king_fahd_suburb_dammam_ksa"),
              phone: "+966 56 145 8167",
            },
            {
              location: t("the_complex_dt"),
              address: t("king_fahd_branch_road_dammam"),
              phone: "+966 55 973 9603",
            },
            {
              location: t("gama_hospital"),
              address: t("king_fahd_road_al_qashlah_dhahran_dammam_ksa"),
              phone: "+966 56 146 0236",
            },
            {
              location: t("al_safa"),
              address: t(
                "ground_floor_13_street_al_rakha_ash_sharqiyah_34222_saudi_arabia"
              ),
              phone: "+966 59 092 2244",
            },
            {
              location: t("nakheel_mall"),
              address: t("king_fahd_road_al_manar_dammam_ksa"),
              phone: "+966 56 145 8628",
            },
            {
              location: t("johns_hopkins_aramco_hospital"),
              address: t(
                "john_hopkins_aramco_healthcare_speciality_clinics_6th_street_gharb_al_dahran_dahran_34465"
              ),
              phone: "+966 54 065 7377",
            },
            {
              location: t("lulu_jubail"),
              address: t("lulu_jubail_ksa"),
              phone: "+966 56 693 8413",
            },
            {
              location: t("mazaya_noor_station"),
              address: t("omar_ibn_khatab_street"),
              phone: "+966 55 606 6221",
            },
            {
              location: t("mazaya_gas_station"),
              address: t("mazaya_gas_station_dharan_jubail_highway_al_nahda"),
              phone: "+966 56 690 8655",
            },
            {
              location: t("mazaya_al_dabab"),
              address: t("omar_ibn_al_khattab_st_al_dabab_dammam_32261"),
              phone: "+966 56 465 3934",
            },
            {
              location: t("othaim_mall_dammam"),
              address: t(
                "othaim_mall_gate_2_ground_floor_prince_mohd_branch_rd"
              ),
              phone: "+966 56 697 1767",
            },
            {
              location: t("petromin_jalawaiya"),
              address: t("abu_al_fath_thaqfi_al_jalawiyah_dammam_32246"),
              phone: "+966 56 694 3439",
            },
            {
              location: t("king_saud_noor_dt"),
              address: t("c2gqx65_dammam_ksa"),
              phone: "+966 59 383 5022",
            },
            {
              location: t("buhairh_plaza"),
              address: t(
                "buharia_plaza_prince_nayef_bin_abdulaziz_road_al_buhayrah_dammam_ksa"
              ),
              phone: "+966 50 724 9472",
            },
            {
              location: t("kfia_domestic_airport"),
              address: t(
                "gate_116_ground_floor_domestic_king_fahad_international_airport_king_fahd_road_eastern_province_dammam_ksa"
              ),
              phone: "+966 54 193 2033",
            },
            {
              location: t("kfia_international_airport"),
              address: t(
                "kfia_international_airport_king_fahd_bin_abul_aziz_road_dammam"
              ),
              phone: "+966 56 695 8479",
            },
            {
              location: t("lulu_-dammam"),
              address: t(
                "entrance_1_ground_floor_lulu_hypermarket_prince_mohammed_bin_fahd_road"
              ),
              phone: "+966 59 129 1300",
            },
            {
              location: t("petromin-al_rayyan"),
              address: t("18th_street_petromin-_ar_rayyan"),
              phone: "+966 56 697 0157",
            },
            ,
            {
              location: t("petromin_exit_8"),
              address: t(
                "petromin_exit_8_dammam_branch_rd_ghirnatah_riyadh_13242_saudi_arabia"
              ),
              phone: "+966 56 694 7488",
            },
            {
              location: t("sulaymanya_plaza"),
              address: t(
                "unit_no_21_22_sulamaniyah_plaza_kind_abdulla_road_al_hofuf"
              ),
              phone: "+966 59 979 0383",
            },
            ,
            {
              location: t("military_hospital"),
              address: t("abqaiq_road-_king_fahad_medical_city"),
              phone: "+966 50 900 2492",
            },
            {
              location: t("timhortons_prince_meetab_dt"),
              address: t(
                "82ww+7ch_prince_mutaib_bin_abdulaziz_street_village2_dammam_34273"
              ),
              phone: null,
            },
          ],
        },
        {
          region: t("dharan"),
          locations: [
            {
              location: t("doha_centre"),
              address: t(
                "12&13_doha_center_abdullah_ibn_al_abbas_doha_al_janubiyah_dharan_ksa"
              ),
              phone: "+966 56 174 3072",
            },
            {
              location: t("mall_of_dehran"),
              address: t(
                "gf_034-_6864_prince_faisal_bin_fahd_road_doha_al_janubiyah"
              ),
              phone: "+966 54 261 4095",
            },
          ],
        },
        {
          region: t("hail"),
          locations: [
            {
              location: t("talal_square_-hail"),
              address: t("fahd_al-ali_al-arifi_al-nuqra_hail_55431"),
              phone: "+966 50 900 2137",
            },
          ],
        },
        {
          region: t("al_ahsa"),
          locations: [
            {
              location: t("othaim_mall-_al_hassa"),
              address: t("albustan_al_mubrrraz_36341_al_hassa"),
              phone: "+966 55 606 6124",
            },
          ],
        },
        {
          region: t("jeddah"),
          locations: [
            {
              location: t("hamdaniyah_dt"),
              address: t(
                "yasser_bin_amer_al-kinani_street_4904_al_hamadaniya_district_jeddah_23761"
              ),
              phone: "+966 55 606 6547",
            },
            {
              location: t("al_khaldiya_bupa_building"),
              address: t("bir_ar_rahah_al_khalidiyyah_jeddah_ksa"),
              phone: "+966 56 145 7875",
            },
            {
              location: t("al_yamamah_jeddah"),
              address: t("al_yamamah_as_salamah_jeddah_ksa"),
              phone: "+966 56 146 0305",
            },
            {
              location: t("babylon_commercial_centre"),
              address: t("sari_street_al_zahra_jeddah_ksa"),
              phone: "+966 56 146 0435",
            },
            {
              location: t("box_park"),
              address: t("al_batarji_al_zahra_jeddah_ksa"),
              phone: "+966 56 146 0474",
            },
            {
              location: t("burj_edsass"),
              address: t("king_abdul_aziz_road_al_murjan_district_jeddah_ksa"),
              phone: "+966 54 755 6850",
            },
            {
              location: t("burj_salama"),
              address: t("al_medina_road_al_salamah_jeddah_ksa"),
              phone: "+966 54 755 8518",
            },
            {
              location: t("emaar_square"),
              address: t("emaar_square_al_fayhaa_jeddah_ksa"),
              phone: "+966 56 464 9248",
            },
            {
              location: t("haifa_mall"),
              address: t(
                "haifa_mall_palestine_al-ruwais_jeddah_23215_saudi_arabia"
              ),
              phone: "+966 53 505 5069",
            },
            {
              location: t("hera_street"),
              address: t("hera_st_ar_rabwah_jeddah_23533"),
              phone: "+966 53 505 5647",
            },
            {
              location: t("saleem_plaza"),
              address: t("um_almuminin_sawdah_an_naseem_jeddah_ksa"),
              phone: "+966 56 696 1073",
            },
            {
              location: t("aziz_mall"),
              address: t("al_faisaliyyah_jeddah"),
              phone: "+966 56 145 8310",
            },
            {
              location: t("mall_of_arabia"),
              address: t(
                "mall_of_arabia_unit_no.gf_92_airport_road_jeddah_ksa"
              ),
              phone: "+966 56 697 0135",
            },
            {
              location: t("marina_avenue"),
              address: t(
                "obhur-_king_abul-aziz_road_al-shate’a_district_jeddah_ksa"
              ),
              phone: "+966 56 693 1361",
            },
            {
              location: t("q_park"),
              address: t(
                "6687_al_amir_sultan_branch_al_muhammadiyah_district_jeddah_ksa"
              ),
              phone: "+966 56 145 9636",
            },
            {
              location: t("red_sea_mall"),
              address: t(
                "red_sea_mall_king_abdulaziz_branch_rd_al-shatea_jeddah_saudi_arabia"
              ),
              phone: "+966 56 691 2139",
            },
            {
              location: t("jeddah_park"),
              address: t(
                "prince_mohammed_bin_abdulaziz_st_aziziyah_jeddah_park_mall_price_jeddah_23322"
              ),
              phone: "+966 58 072 1781",
            },
            {
              location: t("marina_beach_corniche"),
              address: t("ash_shati_jeddah_ksa"),
              phone: "+966 56 464 5327",
            },

            {
              location: t("al_saria_square"),
              address: t("shop_no_22_king_abdullah_branch_road_jeddah_ksa"),
              phone: "+966 54 755 9506",
            },

            {
              location: t("nujood_center"),
              address: t(
                "prince_mohammed_bin_abdulaziz_st_al_andalus_jeddah_ksa"
              ),
              phone: "+966 56 464 9238",
            },
            {
              location: t("petromin_daham_drive_thru"),
              address: t("prince_mutaib_bin_abdulaziz_rd_al-rehab_jeddah"),
              phone: "+966 54 410 2786",
            },
            {
              location: t("salam_mall"),
              address: t("king_abdullah_road_salam_mall_jeddah_ksa"),
              phone: "+966 54 755 8518",
            },
            {
              location: t("sasco_gas_station"),
              address: t("al_riyadh_dahaban_jeddah_ksa_23853"),
              phone: "+966 55 350 55292",
            },
            {
              location: t("event_mall"),
              address: t(
                "event_mall._jeddah_mecca_road_lulu_building-_main_entrance.ground_floor_western_province_jeddah_ksa"
              ),
              phone: "+966 56 691 5810",
            },
            {
              location: t("masif-petromin"),
              address: t("madina-jeddah_highway_masif_jeddah_ksa"),
              phone: "+966 545 440 963",
            },
            {
              location: t("petromin-_al_qumma"),
              address: t("madina-jeddah_highway_quma_jeddah_ksa"),
              phone: "+966 566 904 533",
            },
            {
              location: t("salmaniyah_gas_station"),
              address: t("8032_ring_rd_express_way_ar_rawabi_district_jeddah"),
              phone: "+966 535 055 246",
            },
            {
              location: t("yasmeen_mall"),
              address: t("al-manar_jeddah_23462_jeddah_ksa"),
              phone: "+966 531 450 556",
            },
            {
              location: t("petromin_muraba"),
              address: t(
                "7071_prince_saud_al_faisal_al_faysaliyah_district_jeddah_23441_saudi_arabia"
              ),
              phone: "+966 509 004 201",
            },
            {
              location: t("the_village_mall"),
              address: t("prince_talal_bin_mansour_rd_al_asalah_jeddah_23738"),
              phone: "+966 547 345 209",
            },
          ],
        },
        {
          region: t("khamis_mushait"),
          locations: [
            {
              location: t("al_ghunaim"),
              address: t("prince_sultan_rd_al_shifa_khamis_mushait_62433"),
              phone: "+966 56 689 9516",
            },
            {
              location: t("box_shop"),
              address: t("al_fath_khamis_mushait_ksa_62458"),
              phone: "+966 53 895 0558",
            },
            {
              location: t("khamis_avenue"),
              address: t("dhalalah_khamis_mushait_62411"),
              phone: "+966 50 550 8327",
            },
            {
              location: t("mujan_park"),
              address: t(
                "gate_1_ground_floor_mujan_park_an_nuzhah_khamis_mushait_ksa_62465"
              ),
              phone: "+966 53 784 2231",
            },
            {
              location: t("petromin_aboor"),
              address: t("4092_al_mazab_khamis_mushait_ksa_62456"),
              phone: "+966 55 685 0559",
            },
            {
              location: t("saudi_german_hospital_-_abha"),
              address: t("king_fahd_rd_hijlah_khamis_mushait_ksa"),
              phone: "+966 50 550 6711",
            },
          ],
        },
        {
          region: t("khobar"),
          locations: [
            {
              location: t("azizyah_dt"),
              address: t("al_tahliyah_al_khobar_ksa"),
              phone: "+966 56 145 7465",
            },
            {
              location: t("al_rashid_mall_kiosk"),
              address: t(
                "al_rashid_mall_al_ulaya_3554_al_khobar_34448_saudi_arabia"
              ),
              phone: "+966 56 694 9563",
            },
            {
              location: t("sulaiman_al_habib_hospital"),
              address: t(
                "3327_king_fahd_road_al_bandariyah_6387_al_khobar_ksa"
              ),
              phone: "+966 56 145 8351",
            },
            {
              location: t("somerset_hotel"),
              address: t(
                "3082_al_amir_faisal_ibn_fahd_road_al_bandariyah_district_unit_no_7657_al_khobar_34424"
              ),
              phone: "+966 50 900 6745",
            },
            {
              location: t("petromin_al_rashid"),
              address: t("petromin_al_rashid"),
              phone: "+966 59 031 0646",
            },
            {
              location: t("tim_hortons_mazaya_king_khalid-1"),
              address: t("65jv+hgq_al_khobar"),
              phone: "+966 55 964 8403",
            },
            {
              location: t("shorofat_park"),
              address: t("9626+jch_al_khobar"),
              phone: null,
            },
          ],
        },
        {
          region: t("madina"),
          locations: [
            {
              location: t("mosadia_plaza"),
              address: t("mosadia_plaza_madina_road_jeddah_ksa"),
              phone: "+966 56 695 2767",
            },
            {
              location: t("madina_boulevard"),
              address: t(
                "8892_salam_ibn_aby_motaie_alraiah_al_madina_al_munawwarah"
              ),
              phone: "+966 55 543 0159",
            },
            {
              location: t("qiba_front"),
              address: t("qiba_rd_almughaiailah_madina_42315"),
              phone: "+966 55 543 0159",
            },
            {
              location: t("rashid_mall_madina"),
              address: t(
                "69432781_king_abdullah_branch_road_shohada_madinah_42361_gate_1"
              ),
              phone: "+966 53 505 5181",
            },
            {
              location: t("madina_airport"),
              address: t(
                "prince_mohammed_bin_abdulaziz_international_airport_al_madinah_al_munawwarah"
              ),
              phone: "+966 55 507 4906",
            },
          ],
        },
        {
          region: t("makkah"),
          locations: [
            {
              location: t("makkah_gas_station_dt"),
              address: t("4517_at_taif_rd_makkah_ksa"),
              phone: "+966 56 689 8361",
            },
            {
              location: t("al_awli_inline"),
              address: t("an_naseem_makkah_ksa"),
              phone: "+966 50 950 5507",
            },
            {
              location: t("ring_road_dt"),
              address: t("khalidiah_district_3rd_ring_road_makkah"),
              phone: "+966 55 606 6516",
            },
            {
              location: t("abraj_albait_first_floor"),
              address: t("clock_tower_al_hajlah_mecca_24231"),
              phone: "+966 55 503 9313",
            },
            {
              location: t("petromin_umra_land"),
              address: t("al_umrah_al_jadidah_mecca_24414"),
              phone: "+966 50 900 7239",
            },
            {
              location: t("darb_almatrafi"),
              address: t("6334_king_faisal_rd_3524_makkah_24421"),
              phone: "+966 50 900 6519",
            },
            {
              location: t("drees_makkah"),
              address: t("at_taniem_mecca_24223"),
              phone: "+966 55 503 6920",
            },
            {
              location: t("naseem_makkah_dt"),
              address: t("fatimah_az_zahra_3399_al_naseem_makkah_24245"),
              phone: "+966 53 400 4067",
            },
          ],
        },
        {
          region: t("rabigh"),
          locations: [
            {
              location: t("drees_rabigh"),
              address: t("al_dress_rabigh_city_klayah_23979"),
              phone: "+966 50 900 3606",
            },
          ],
        },
        {
          region: t("riyadh"),
          locations: [
            {
              location: t("park_avenue_mall"),
              address: t("park_avenue_qurtuba_riyadh_ksa_13248"),
              phone: "+966 53 807 5055",
            },
            {
              location: t("the_cube_dt"),
              address: t("king_fahd_rd_2141_al_murabba_riyadh_12631"),
              phone: "+966 55 796 5003",
            },
            {
              location: t("al_hamra_plaza"),
              address: t("al_batha_al_mansourah_riyadh_ksa"),
              phone: "+966 58 386 6561",
            },
            {
              location: t("janadriya_dt"),
              address: t("al_souleimaniah_al_janadiriyah_riyadh_13611"),
              phone: "+966 55 606 6285",
            },
            {
              location: t("khaleej_mall"),
              address: t(
                "saudi_arabia_king_abdul_aziz_riyadh_3224_khaleej_mall_gate_2"
              ),
              phone: "+966 50 550 1460",
            },
            {
              location: t("al_orouba_street"),
              address: t("al_orouba_street_sulemanaya_district_riyadh"),
              phone: "+966 56 689 1597",
            },
            {
              location: t("al_wadi_plaza"),
              address: t("prince_mashal_ibn_abdulaziz_irqah_riyadh_12583_ksa"),
              phone: "+966 53 775 4711",
            },
            {
              location: t("al_yasmin_square"),
              address: t("alyasmin_8081_saudi_arabia_riyadh_13322"),
              phone: "+966 55 725 0556",
            },
            {
              location: t("deem_plaza"),
              address: t("shop14deem_plaza_al_hamra_riyadh"),
              phone: "+966 56 464 5314",
            },
            {
              location: t("aliya_plaza"),
              address: t("8479_ar_rabi_3713_riyadh_13316_saudi_arabia"),
              phone: "+966 56 693 5245",
            },
            {
              location: t("granada_mall"),
              address: t(
                "6111_ground_floor_granada_mall_northern_ring_road_riyadh_ksa"
              ),
              phone: "+966 56 692 1006",
            },
            {
              location: t("hayat_mall"),
              address: t(
                "hayat_mall_gate_no_1_shop_no_f9192_king_abdul_aziz_road_riyadh"
              ),
              phone: "+966 55 830 4875",
            },
            {
              location: t("salam_mall_riyadh"),
              address: t("4419_western_ring_branch_rd_alawali_riyadh_14924"),
              phone: "+966 56 145 9204",
            },
            {
              location: t("tahlia_street"),
              address: t(
                "ground_floor_bldg_44_prince_mohammed_bin_abdul_aziz_thaliya_street_riyadh_ksa"
              ),
              phone: "+966 56 691 7169",
            },
            {
              location: t("the_roof"),
              address: t("al_yasmin_riyadh_ksa"),
              phone: "+966 53 505 5009",
            },
            {
              location: t("imam_saud_road"),
              address: t(
                "6287_al_imam_saud_ibn_abdul_aziz_branch_rd_al_izdihar_riyadh_12485"
              ),
              phone: "+966 55 330 50554",
            },
            {
              location: t("king_fahad_corner_dt"),
              address: t(
                "king_fahad_the_corner_prince_saad_ibn_abdul_aziz_an_namudhajiyah_riyadh"
              ),
              phone: "+966 57 294 4931",
            },
            {
              location: t("makkan_mall"),
              address: t(
                "prince_muhammad_ibn_saad_ibn_abdulaziz_rd_al_malqa_riyadh"
              ),
              phone: "+966 50 001 8479",
            },
            {
              location: t("riyadh_military_hospital"),
              address: t("unit_345_prince_mashari_ibn_abdulaziz_riyadh_ksa"),
              phone: "+966 59 319 8084",
            },
            {
              location: t("mursalat_plaza"),
              address: t("unit_no_23_24_riyadh_ksa"),
              phone: "+966 56 692 9890",
            },
            {
              location: t("nakheel_mall"),
              address: t("gf_12_al_nakheek_mall_al_mughrizat_riyadh_12483"),
              phone: "+966 53 078 5055",
            },
            {
              location: t("petromin_exit_13"),
              address: t(
                "exit_13_petromin_74877325_eastern_ring_branch_rd_ar_rabwah"
              ),
              phone: "+966 56 694 9757",
            },
            {
              location: t("petromin_exit_14"),
              address: t("exit_14_ar_rayyan_eastern_ring_branch_rd_riyadh_ksa"),
              phone: "+966 53 529 5055",
            },
            {
              location: t("petromin_thumamah"),
              address: t(
                "unit_number_2703_ath_thumama_road_qurtuba13248_petromin_gas_station"
              ),
              phone: "+966 56 143 5951",
            },
            {
              location: t("prince_turki_street"),
              address: t(
                "unit_number_90_prince_turki_ibn_abdulaziz_road_riyadh_ksa"
              ),
              phone: "+966 56 143 5892",
            },
            {
              location: t("riyadh_gallery"),
              address: t("king_fahd_rd_king_fahd_riyadh_ksa"),
              phone: "+966 54 397 5083",
            },
            {
              location: t("riyadh_season_boulevard"),
              address: t(
                "prince_mohammed_ibn_salman_ibn_abdulaziz_rd_hittin_riyadh_13516"
              ),
              phone: "+966 55 245 0552",
            },
            {
              location: t("rabwa"),
              address: t(
                "prince_matab_ibn_abdul_aziz_road_exit_14_rabwa_riyadh_ksa"
              ),
              phone: "+966 59 956 3599",
            },
            {
              location: t("sahara_mall"),
              address: t(
                "saudi_arabia_king_fahd_riyadh_12272_sahara_mall_gate_1"
              ),
              phone: "+966 53 935 0558",
            },
            {
              location: t("saudi_german_hospital_riyadh"),
              address: t("as_sahafah_riyadh_ksa"),
              phone: "+966 50 550 7430",
            },
            {
              location: t("mudon"),
              address: t(
                "modon_takhassusi_st_al_mathar_ash_shamali_riyadh_12331_saudi_arabia"
              ),
              phone: "+966 59 380 8666",
            },
            {
              location: t("suwaidi_plaza"),
              address: t(
                "suwaidi_district_6783_kaab_ibn_zuhari_suwaidi_saudi_arabia"
              ),
              phone: "+966 53 505 5408",
            },
            {
              location: t("takahasussi_dt"),
              address: t("thumama_road_sahafa_riyadh13315"),
              phone: "+966 55 606 6234",
            },
            {
              location: t("tawaniyah_tower"),
              address: t(
                "king_fahd_rd_as_sulimaniyah_riyadh_12211_saudi_arabia"
              ),
              phone: "+966 55 627 1124",
            },
            {
              location: t("u-plaza"),
              address: t("salman_al_farsi_riyadh_ksa"),
              phone: "+966 56 689 2994",
            },
            {
              location: t("riyadh_airport_tr3-air_side"),
              address: t(
                "airport_road_king_khalid_international_airport_kiosk_1_riyadh_13458"
              ),
              phone: "+966 54 621 2346",
            },
            {
              location: t("rashid_mall-abha"),
              address: t(
                "7hc46hqj+66_al_rashid_mall_budaiya_abha_62581_abha_62581"
              ),
              phone: "+966 50 900 2416",
            },
            {
              location: t("benzene_dt"),
              address: t("dammam_road_al_yarmuk_riyadh_13251"),
              phone: "+966 55 771 8057",
            },
            {
              location: t("qasr_mall"),
              address: t("al_souweidi_al_aam_as_suwaidi_riyadh_11564"),
              phone: "+966 55 502 4547",
            },
            {
              location: t("gulf_gas_station-al_maseef_exit_5"),
              address: t("king_abdul_aziz_branch_rd_almasiaf_riyadh"),
              phone: "+966 59 398 1777",
            },
            {
              location: t("muzahmiyah_dt"),
              address: t("salman_bin_abdulaziz_st_nawara_al-muzahmiya_19655"),
              phone: "+966 53 400 4076",
            },
            {
              location: t("suwaidi_hamza_dt"),
              address: t("hamza_bin_abdelmutaleb_st"),
              phone: "+966 53 400 4085",
            },
            {
              location: t("petromin_imam_shafi"),
              address: t("6153_al_imam_shafi_al_manar_riyadh_14222"),
              phone: "+966 53 600 6092",
            },
            {
              location: t("al_saada_dt"),
              address: t("alarin_abha_62524"),
              phone: "+966 53 332 1502",
            },
            {
              location: t("petromin_olaya_2"),
              address: t(
                "rhga6607_2624_olaya_st_al_murooj_district_6607_riyadh"
              ),
              phone: "+966 54 667 2546",
            },
            {
              location: t("reem_compound"),
              address: t("abdallah_ibn_ibrahim_ibn_seif_al_munsiyah_riyadh"),
              phone: "+966 54 613 5729",
            },
            {
              location: t("riyadh_airport_t4-air_side"),
              address: t(
                "airport_road_king_khalid_international_airport_riyadh"
              ),
              phone: "+966 54 613 5604",
            },
            {
              location: t("al_sheikh_jaber_dt"),
              address: t(
                "2434_al_sheikh_jaber_al_ahmad_al_sabah_al_qadisiyah_district_7941_riyadh_13236"
              ),
              phone: "+966 54 865 9827",
            },
            {
              location: t("riyadh_front"),
              address: t(
                "riyadh_front_king_fahd_international_airport_road_riyadh_13413"
              ),
              phone: "+966 57 067 957",
            },
            {
              location: t("imam_saud_almaseef"),
              address: t(
                "al_imam_saud_ibn_abdul_aziz_branch_rd_almasiaf_riyadh_12465"
              ),
              phone: "+966 59 985 5675",
            },
            {
              location: t("petromin_badea"),
              address: t(
                "alshaikh_abdulaziz_ibn_mohamed_ibn_ali_petromin_gas_station_badea_riyadh"
              ),
              phone: "+966 54 175 4218",
            },
          ],
        },
        {
          region: t("taif"),
          locations: [
            {
              location: t("darab_alhazim_taif"),
              address: t("26314_asifet_alsahara_station_taif"),
              phone: "+966 55 543 0391",
            },
            {
              location: t("darab_shibani_taif"),
              address: t("26553_estrin_halaqa_taif"),
              phone: "+966 55 543 0325",
            },
            {
              location: t("the_park"),
              address: t("airport_rd_aljawharah_taif_26575"),
              phone: "+966 55 999 1034",
            },
            {
              location: t("jouri_mall"),
              address: t("khalid_bin_walid_road_aljal_taif_26523"),
              phone: "+966 55 501 2768",
            },
          ],
        },
        {
          region: t("najran"),
          locations: [
            {
              location: t("najran_park"),
              address: t("tim_hortons_najran_park"),
              phone: "+966 54 175 4879",
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    let country = selectedCountry?.properties.name.split("_")[0];
    const branches = locations
      .filter((location) => location.country === country)
      .map((country) => country.branches)[0];
    setSelectedBranches(branches);
  }, [selectedCountry]);

  console.log(selectedBranches);

  return (
    <>
      <section className="bg-white py-[5rem] px-3">
        <article className="container mx-auto text-center">
          <div className="lg:flex">
            <div
              className={`flex flex-col gap-10 lg:basis-[50%] ${
                locale === "en" ? "lg:text-left" : "lg:text-right"
              }`}
            >
              <div
                className="text-[#A82730]"
                style={{
                  fontFamily:
                    locale === "en" ? "sofia pro black" : "GE SS Two Bold",
                }}
              >
                <h1 className="text-[50px]">{t("locations")}</h1>
              </div>
              <p
                className="text-[#3B2222] text-[22px]"
                style={{
                  fontFamily:
                    locale === "en" ? "sofia pro black" : "GE SS Two Bold",
                }}
              >
                {t(
                  "today_there_are_274_tim_hortons_restaurants_operating_across_the_gcc_with_more_to_come_we_currently_have_86_locations_in_the_uae_139_locations_in_ksa_8_locations_in_oman_8_locations_in_bahrain_26_locations_in_qatar_and_7_locations_in_kuwait"
                )}
              </p>
              <div className="text-[#3B2222] text-[20px]">
                <p>
                  {t(
                    "select_from_the_countries_listed_on_the_map_to_find_the_tims_location_closest_to_you"
                  )}
                </p>
              </div>
            </div>
            <div className="lg:basis-[50%]">
              <CountriesMap
                setSelectedCountry={setSelectedCountry}
                selectedCountry={selectedCountry}
                setSelectedRegion={setSelectedRegion}
                setSelectedLocations={setSelectedLocations}
                selectedBranches={setSelectedBranches}
              />
            </div>
          </div>
        </article>
      </section>
      {selectedCountry && (
        <Locations
          selectedBranches={selectedBranches}
          selectedCountry={selectedCountry}
          selectedRegion={selectedRegion}
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
          setSelectedRegion={setSelectedRegion}
        />
      )}
    </>
  );
};

export default Countries;
