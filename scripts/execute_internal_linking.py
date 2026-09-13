#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
execute_internal_linking.py
Automates the full internal linking matrix for all 18 Ben Thanh articles (EN & VI).
Enforces:
1. Meaningful anchor texts that match the destination
2. 100% Real, non-fake URLs from the verified site whitelist
3. Zero duplicate link destinations per article
4. Zero self-links
5. Complete parity between all pipeline folders
"""

import os
import re
import glob

VALID_EN = {
    '/things-to-do-near-ben-thanh-market',
    '/hcmc-museum-of-fine-arts-guide',
    '/ben-thanh-market-food-guide',
    '/ben-thanh-one-day-walking-tour',
    '/independence-palace-saigon-guide',
    '/ben-thanh-central-metro-station-guide',
    '/mariamman-hindu-temple-saigon',
    '/ben-thanh-market-shopping-guide',
    '/saigon-hop-on-hop-off-bus-guide',
    '/secret-apartment-cafes-near-ben-thanh',
    '/best-rooftop-bars-near-ben-thanh',
    '/boutique-hotels-near-ben-thanh',
    '/things-to-do-in-ben-thanh-market',
    '/ben-thanh-market-ultimate-travel-guide',
    '/ben-thanh-market-scams-safety-guide',
    '/money-exchange-ben-thanh-ha-tam-guide',
    '/parking-guide-near-ben-thanh-market',
    '/tan-son-nhat-airport-to-ben-thanh-transfer-guide',
    '/mekong-khan-ran-scarf-legacy',
    '/tour/ho-chi-minh-city-half-day-private-tour',
    '/tour/cooking-class-local-market',
    '/tour/half-day-cu-chi-tunnels-tour',
    '/tour/full-day-mekong-delta-tour-ben-tre-my-tho',
    '/tours',
    '/tailor-made'
}

VALID_VI = {
    '/dia-diem-noi-tieng-quanh-ben-thanh',
    '/bao-tang-my-thuat-tphcm',
    '/am-thuc-cho-ben-thanh',
    '/lich-trinh-di-bo-ben-thanh-1-ngay',
    '/dinh-doc-lap-sai-gon',
    '/ga-ngam-metro-ben-thanh',
    '/den-hindu-mariamman-sai-gon',
    '/kinh-nghiem-mua-sam-cho-ben-thanh',
    '/xe-bus-2-tang-hop-on-hop-off-sai-gon',
    '/ca-phe-chung-cu-gan-ben-thanh',
    '/rooftop-bar-view-cho-ben-thanh',
    '/khach-san-boutique-gan-ben-thanh',
    '/cho-ben-thanh-co-gi-choi',
    '/kinh-nghiem-di-cho-ben-thanh',
    '/canh-bao-lua-dao-chat-chem-cho-ben-thanh',
    '/doi-ngoai-te-cho-ben-thanh-ha-tam',
    '/bai-gui-xe-quanh-cho-ben-thanh',
    '/di-tu-san-bay-tan-son-nhat-ve-ben-thanh',
    '/khan-ran-nam-bo',
    '/tour/ho-chi-minh-city-half-day-private-tour',
    '/tour/cooking-class-local-market',
    '/tour/half-day-cu-chi-tunnels-tour',
    '/tour/full-day-mekong-delta-tour-ben-tre-my-tho',
    '/tours',
    '/tailor-made'
}

# Cross-language URL corrections for Vietnamese files
VI_CROSS_FIXES = {
    '/things-to-do-near-ben-thanh-market': '/dia-diem-noi-tieng-quanh-ben-thanh',
    '/independence-palace-saigon-guide': '/dinh-doc-lap-sai-gon',
    '/ben-thanh-central-metro-station-guide': '/ga-ngam-metro-ben-thanh',
    '/hcmc-museum-of-fine-arts-guide': '/bao-tang-my-thuat-tphcm',
    '/ben-thanh-market-food-guide': '/am-thuc-cho-ben-thanh',
    '/ben-thanh-one-day-walking-tour': '/lich-trinh-di-bo-ben-thanh-1-ngay',
    '/ben-thanh-market-shopping-guide': '/kinh-nghiem-mua-sam-cho-ben-thanh',
    '/saigon-hop-on-hop-off-bus-guide': '/xe-bus-2-tang-hop-on-hop-off-sai-gon',
    '/secret-apartment-cafes-near-ben-thanh': '/ca-phe-chung-cu-gan-ben-thanh',
    '/best-rooftop-bars-near-ben-thanh': '/rooftop-bar-view-cho-ben-thanh',
    '/boutique-hotels-near-ben-thanh': '/khach-san-boutique-gan-ben-thanh',
    '/things-to-do-in-ben-thanh-market': '/cho-ben-thanh-co-gi-choi',
    '/ben-thanh-market-ultimate-travel-guide': '/kinh-nghiem-di-cho-ben-thanh',
    '/ben-thanh-market-scams-safety-guide': '/canh-bao-lua-dao-chat-chem-cho-ben-thanh',
    '/money-exchange-ben-thanh-ha-tam-guide': '/doi-ngoai-te-cho-ben-thanh-ha-tam',
    '/parking-guide-near-ben-thanh-market': '/bai-gui-xe-quanh-cho-ben-thanh',
    '/mekong-khan-ran-scarf-legacy': '/khan-ran-nam-bo'
}

def clean_vi_cross_language_links(text):
    for en_url, vi_url in VI_CROSS_FIXES.items():
        text = text.replace(f'({en_url})', f'({vi_url})')
    return text

# Mapping of sibling recommendations for each article index (1 to 18)
CLUSTER_RECOMMENDATIONS_EN = {
    1: [
        ("/hcmc-museum-of-fine-arts-guide", "HCMC Museum of Fine Arts", "admiring Indochine architecture and lacquer masterpieces at the [HCMC Museum of Fine Arts](/hcmc-museum-of-fine-arts-guide)"),
        ("/independence-palace-saigon-guide", "Independence Palace", "visiting the modernist landmark of the [Independence Palace](/independence-palace-saigon-guide)"),
        ("/mariamman-hindu-temple-saigon", "Mariamman Hindu Temple", "experiencing spiritual tranquility at the century-old [Mariamman Hindu Temple](/mariamman-hindu-temple-saigon)"),
        ("/ben-thanh-central-metro-station-guide", "Ben Thanh Central Metro Station", "descending into the underground halls of the [Ben Thanh Central Metro Station](/ben-thanh-central-metro-station-guide)"),
        ("/ben-thanh-market-food-guide", "Ben Thanh Market Food Guide", "savoring traditional flavors with our [Ben Thanh Market food guide](/ben-thanh-market-food-guide)"),
        ("/ben-thanh-one-day-walking-tour", "One-Day Ben Thanh Walking Tour", "following our turn-by-turn [one-day Ben Thanh walking tour](/ben-thanh-one-day-walking-tour)")
    ],
    2: [
        ("/things-to-do-near-ben-thanh-market", "Things to Do Near Ben Thanh Market", "exploring the broader heritage quarter in our guide to [things to do near Ben Thanh Market](/things-to-do-near-ben-thanh-market)"),
        ("/ben-thanh-one-day-walking-tour", "One-Day Ben Thanh Walking Tour", "incorporating the museum into a curated [one-day Ben Thanh walking tour](/ben-thanh-one-day-walking-tour)"),
        ("/secret-apartment-cafes-near-ben-thanh", "Secret Apartment Cafes", "relaxing over specialty drip coffee in [secret apartment cafes near Ben Thanh](/secret-apartment-cafes-near-ben-thanh)"),
        ("/ben-thanh-central-metro-station-guide", "Ben Thanh Central Metro Station", "arriving effortlessly via the [Ben Thanh Central Metro Station](/ben-thanh-central-metro-station-guide)"),
        ("/tour/ho-chi-minh-city-half-day-private-tour", "Private Ho Chi Minh City Tour", "booking a guided [private Ho Chi Minh City tour](/tour/ho-chi-minh-city-half-day-private-tour)")
    ],
    3: [
        ("/things-to-do-in-ben-thanh-market", "Things to Do in Ben Thanh Market", "discovering the 15 highlighted [things to do in Ben Thanh Market](/things-to-do-in-ben-thanh-market)"),
        ("/tour/cooking-class-local-market", "Cooking Class & Local Market Tour", "taking a hands-on [cooking class and local market tour](/tour/cooking-class-local-market)"),
        ("/ben-thanh-market-scams-safety-guide", "Ben Thanh Market Scams & Safety Guide", "learning fair price benchmarks from our [Ben Thanh Market scams and safety guide](/ben-thanh-market-scams-safety-guide)"),
        ("/best-rooftop-bars-near-ben-thanh", "Best Rooftop Bars Near Ben Thanh", "enjoying sunset drinks at the [best rooftop bars near Ben Thanh](/best-rooftop-bars-near-ben-thanh)"),
        ("/money-exchange-ben-thanh-ha-tam-guide", "Money Exchange at Ha Tam Gold Shop", "exchanging spending cash at the trusted [money exchange near Ben Thanh Market](/money-exchange-ben-thanh-ha-tam-guide)")
    ],
    4: [
        ("/ben-thanh-market-food-guide", "Ben Thanh Market Food Guide", "sampling morning crab noodles with our [Ben Thanh Market food guide](/ben-thanh-market-food-guide)"),
        ("/hcmc-museum-of-fine-arts-guide", "HCMC Museum of Fine Arts", "admiring art collections at the [HCMC Museum of Fine Arts](/hcmc-museum-of-fine-arts-guide)"),
        ("/independence-palace-saigon-guide", "Independence Palace", "visiting the historic [Independence Palace](/independence-palace-saigon-guide)"),
        ("/mariamman-hindu-temple-saigon", "Mariamman Hindu Temple", "stopping for reflection at the [Mariamman Hindu Temple](/mariamman-hindu-temple-saigon)"),
        ("/ben-thanh-central-metro-station-guide", "Ben Thanh Central Metro Station", "touring the modern concourse of the [Ben Thanh Central Metro Station](/ben-thanh-central-metro-station-guide)"),
        ("/saigon-hop-on-hop-off-bus-guide", "Saigon Hop-On Hop-Off Bus", "taking the open-top [Saigon Hop-On Hop-Off Bus](/saigon-hop-on-hop-off-bus-guide) as a restful alternative")
    ],
    5: [
        ("/things-to-do-near-ben-thanh-market", "Things to Do Near Ben Thanh Market", "connecting to the central district in our guide to [things to do near Ben Thanh Market](/things-to-do-near-ben-thanh-market)"),
        ("/ben-thanh-one-day-walking-tour", "One-Day Ben Thanh Walking Tour", "following the route laid out in our [one-day Ben Thanh walking tour](/ben-thanh-one-day-walking-tour)"),
        ("/saigon-hop-on-hop-off-bus-guide", "Saigon Hop-On Hop-Off Bus", "boarding the [Saigon Hop-On Hop-Off Bus](/saigon-hop-on-hop-off-bus-guide) right outside the main palace gate"),
        ("/boutique-hotels-near-ben-thanh", "Boutique Hotels Near Ben Thanh", "staying within walking distance at curated [boutique hotels near Ben Thanh](/boutique-hotels-near-ben-thanh)"),
        ("/tour/ho-chi-minh-city-half-day-private-tour", "Private Ho Chi Minh City Tour", "exploring the bunker archives on a [private Ho Chi Minh City tour](/tour/ho-chi-minh-city-half-day-private-tour)")
    ],
    6: [
        ("/things-to-do-in-ben-thanh-market", "Things to Do in Ben Thanh Market", "connecting directly into the bustling stalls of [things to do in Ben Thanh Market](/things-to-do-in-ben-thanh-market)"),
        ("/parking-guide-near-ben-thanh-market", "Parking Guide Near Ben Thanh Market", "accessing secure parking with our [parking guide near Ben Thanh Market](/parking-guide-near-ben-thanh-market)"),
        ("/tan-son-nhat-airport-to-ben-thanh-transfer-guide", "Tan Son Nhat Airport Transfer Guide", "connecting from the terminal via our [Tan Son Nhat airport to Ben Thanh transfer guide](/tan-son-nhat-airport-to-ben-thanh-transfer-guide)"),
        ("/things-to-do-near-ben-thanh-market", "Things to Do Near Ben Thanh Market", "stepping up into the historic hub of [things to do near Ben Thanh Market](/things-to-do-near-ben-thanh-market)"),
        ("/tailor-made", "Tailor-Made Vietnam Journeys", "customizing an urban and rail journey with our [tailor-made travel design](/tailor-made)")
    ],
    7: [
        ("/things-to-do-near-ben-thanh-market", "Things to Do Near Ben Thanh Market", "visiting surrounding heritage sights featured in [things to do near Ben Thanh Market](/things-to-do-near-ben-thanh-market)"),
        ("/ben-thanh-one-day-walking-tour", "One-Day Ben Thanh Walking Tour", "including the temple in our morning [one-day Ben Thanh walking tour](/ben-thanh-one-day-walking-tour)"),
        ("/secret-apartment-cafes-near-ben-thanh", "Secret Apartment Cafes", "relaxing after your temple visit in [secret apartment cafes near Ben Thanh](/secret-apartment-cafes-near-ben-thanh)"),
        ("/ben-thanh-market-food-guide", "Ben Thanh Market Food Guide", "sampling nearby noodle soups with our [Ben Thanh Market food guide](/ben-thanh-market-food-guide)"),
        ("/tours", "Curated Vietnam Tours", "discovering more southern heritage on our [curated Vietnam tours](/tours)")
    ],
    8: [
        ("/money-exchange-ben-thanh-ha-tam-guide", "Money Exchange at Ha Tam Gold Shop", "securing local cash at the licensed [money exchange near Ben Thanh Market](/money-exchange-ben-thanh-ha-tam-guide)"),
        ("/ben-thanh-market-scams-safety-guide", "Ben Thanh Market Scams & Safety Guide", "avoiding bargaining traps with our [Ben Thanh Market scams and safety guide](/ben-thanh-market-scams-safety-guide)"),
        ("/things-to-do-in-ben-thanh-market", "Things to Do in Ben Thanh Market", "navigating the 4 gates with our [things to do in Ben Thanh Market](/things-to-do-in-ben-thanh-market) guide"),
        ("/ben-thanh-market-ultimate-travel-guide", "Ben Thanh Market Ultimate Travel Guide", "checking opening hours in our [Ben Thanh Market ultimate travel guide](/ben-thanh-market-ultimate-travel-guide)"),
        ("/mekong-khan-ran-scarf-legacy", "Mekong Khan Ran Scarf Legacy", "discovering authentic woven craftsmanship in the [Mekong khăn rằn scarf legacy](/mekong-khan-ran-scarf-legacy)")
    ],
    9: [
        ("/things-to-do-near-ben-thanh-market", "Things to Do Near Ben Thanh Market", "exploring the main landmarks in our guide to [things to do near Ben Thanh Market](/things-to-do-near-ben-thanh-market)"),
        ("/independence-palace-saigon-guide", "Independence Palace", "stopping right in front of the [Independence Palace](/independence-palace-saigon-guide)"),
        ("/ben-thanh-central-metro-station-guide", "Ben Thanh Central Metro Station", "connecting from the central bus stop to the [Ben Thanh Central Metro Station](/ben-thanh-central-metro-station-guide)"),
        ("/ben-thanh-one-day-walking-tour", "One-Day Ben Thanh Walking Tour", "contrasting the open-top ride with our on-foot [one-day Ben Thanh walking tour](/ben-thanh-one-day-walking-tour)"),
        ("/tour/ho-chi-minh-city-half-day-private-tour", "Private Ho Chi Minh City Tour", "choosing a fully guided [private Ho Chi Minh City tour](/tour/ho-chi-minh-city-half-day-private-tour) for deeper history")
    ],
    10: [
        ("/things-to-do-near-ben-thanh-market", "Things to Do Near Ben Thanh Market", "nestled in the vibrant heart of [things to do near Ben Thanh Market](/things-to-do-near-ben-thanh-market)"),
        ("/hcmc-museum-of-fine-arts-guide", "HCMC Museum of Fine Arts", "just steps away from the [HCMC Museum of Fine Arts](/hcmc-museum-of-fine-arts-guide)"),
        ("/best-rooftop-bars-near-ben-thanh", "Best Rooftop Bars Near Ben Thanh", "switching to evening cocktails at the [best rooftop bars near Ben Thanh](/best-rooftop-bars-near-ben-thanh)"),
        ("/ben-thanh-one-day-walking-tour", "One-Day Ben Thanh Walking Tour", "pausing for drip coffee during our [one-day Ben Thanh walking tour](/ben-thanh-one-day-walking-tour)"),
        ("/parking-guide-near-ben-thanh-market", "Parking Guide Near Ben Thanh Market", "finding secure parking lots with our [parking guide near Ben Thanh Market](/parking-guide-near-ben-thanh-market)")
    ],
    11: [
        ("/things-to-do-near-ben-thanh-market", "Things to Do Near Ben Thanh Market", "overlooking the historic district detailed in [things to do near Ben Thanh Market](/things-to-do-near-ben-thanh-market)"),
        ("/ben-thanh-market-food-guide", "Ben Thanh Market Food Guide", "dining at local stalls with our [Ben Thanh Market food guide](/ben-thanh-market-food-guide) before evening drinks"),
        ("/secret-apartment-cafes-near-ben-thanh", "Secret Apartment Cafes", "spending a quiet afternoon in [secret apartment cafes near Ben Thanh](/secret-apartment-cafes-near-ben-thanh)"),
        ("/boutique-hotels-near-ben-thanh", "Boutique Hotels Near Ben Thanh", "staying nearby at properties featured in our [boutique hotels near Ben Thanh](/boutique-hotels-near-ben-thanh) guide"),
        ("/tan-son-nhat-airport-to-ben-thanh-transfer-guide", "Tan Son Nhat Airport Transfer Guide", "heading to late-night flights with our [Tan Son Nhat airport to Ben Thanh transfer guide](/tan-son-nhat-airport-to-ben-thanh-transfer-guide)")
    ],
    12: [
        ("/things-to-do-in-ben-thanh-market", "Things to Do in Ben Thanh Market", "stepping out from your room into the vibrant [things to do in Ben Thanh Market](/things-to-do-in-ben-thanh-market)"),
        ("/tan-son-nhat-airport-to-ben-thanh-transfer-guide", "Tan Son Nhat Airport Transfer Guide", "organizing your arrival using our [Tan Son Nhat airport to Ben Thanh transfer guide](/tan-son-nhat-airport-to-ben-thanh-transfer-guide)"),
        ("/ben-thanh-one-day-walking-tour", "One-Day Ben Thanh Walking Tour", "commencing our curated [one-day Ben Thanh walking tour](/ben-thanh-one-day-walking-tour) directly from your lobby"),
        ("/best-rooftop-bars-near-ben-thanh", "Best Rooftop Bars Near Ben Thanh", "enjoying sunset vistas at the [best rooftop bars near Ben Thanh](/best-rooftop-bars-near-ben-thanh)"),
        ("/tailor-made", "Tailor-Made Vietnam Journeys", "requesting VIP concierge travel with our [tailor-made journey service](/tailor-made)")
    ],
    13: [
        ("/ben-thanh-market-food-guide", "Ben Thanh Market Food Guide", "feasting on regional delicacies with our [Ben Thanh Market food guide](/ben-thanh-market-food-guide)"),
        ("/ben-thanh-market-shopping-guide", "Ben Thanh Market Shopping Guide", "shopping smart with tips from our [Ben Thanh Market shopping guide](/ben-thanh-market-shopping-guide)"),
        ("/ben-thanh-market-scams-safety-guide", "Ben Thanh Market Scams & Safety Guide", "avoiding tourist traps with our [Ben Thanh Market scams and safety guide](/ben-thanh-market-scams-safety-guide)"),
        ("/things-to-do-near-ben-thanh-market", "Things to Do Near Ben Thanh Market", "venturing out to neighboring sights in [things to do near Ben Thanh Market](/things-to-do-near-ben-thanh-market)"),
        ("/ben-thanh-central-metro-station-guide", "Ben Thanh Central Metro Station", "descending to the trains at [Ben Thanh Central Metro Station](/ben-thanh-central-metro-station-guide)")
    ],
    14: [
        ("/things-to-do-in-ben-thanh-market", "Things to Do in Ben Thanh Market", "discovering the full directory of [things to do in Ben Thanh Market](/things-to-do-in-ben-thanh-market)"),
        ("/tan-son-nhat-airport-to-ben-thanh-transfer-guide", "Tan Son Nhat Airport Transfer Guide", "traveling from the airport via our [Tan Son Nhat airport to Ben Thanh transfer guide](/tan-son-nhat-airport-to-ben-thanh-transfer-guide)"),
        ("/parking-guide-near-ben-thanh-market", "Parking Guide Near Ben Thanh Market", "locating verified lots with our [parking guide near Ben Thanh Market](/parking-guide-near-ben-thanh-market)"),
        ("/money-exchange-ben-thanh-ha-tam-guide", "Money Exchange at Ha Tam Gold Shop", "converting foreign notes safely at the [money exchange near Ben Thanh Market](/money-exchange-ben-thanh-ha-tam-guide)"),
        ("/ben-thanh-market-scams-safety-guide", "Ben Thanh Market Scams & Safety Guide", "keeping consumer safety top of mind with our [Ben Thanh Market scams and safety guide](/ben-thanh-market-scams-safety-guide)")
    ],
    15: [
        ("/ben-thanh-market-shopping-guide", "Ben Thanh Market Shopping Guide", "negotiating fair prices with our [Ben Thanh Market shopping guide](/ben-thanh-market-shopping-guide)"),
        ("/money-exchange-ben-thanh-ha-tam-guide", "Money Exchange at Ha Tam Gold Shop", "avoiding street money traps by using the [money exchange near Ben Thanh Market](/money-exchange-ben-thanh-ha-tam-guide)"),
        ("/tan-son-nhat-airport-to-ben-thanh-transfer-guide", "Tan Son Nhat Airport Transfer Guide", "preventing taxi overcharging through our [Tan Son Nhat airport to Ben Thanh transfer guide](/tan-son-nhat-airport-to-ben-thanh-transfer-guide)"),
        ("/ben-thanh-market-ultimate-travel-guide", "Ben Thanh Market Ultimate Travel Guide", "verifying market rules in our [Ben Thanh Market ultimate travel guide](/ben-thanh-market-ultimate-travel-guide)"),
        ("/ben-thanh-market-food-guide", "Ben Thanh Market Food Guide", "eating safely at stalls highlighted in our [Ben Thanh Market food guide](/ben-thanh-market-food-guide)")
    ],
    16: [
        ("/ben-thanh-market-shopping-guide", "Ben Thanh Market Shopping Guide", "spending local currency wisely in our [Ben Thanh Market shopping guide](/ben-thanh-market-shopping-guide)"),
        ("/ben-thanh-market-scams-safety-guide", "Ben Thanh Market Scams & Safety Guide", "protecting your wallet with our [Ben Thanh Market scams and safety guide](/ben-thanh-market-scams-safety-guide)"),
        ("/parking-guide-near-ben-thanh-market", "Parking Guide Near Ben Thanh Market", "finding nearby parking spots in our [parking guide near Ben Thanh Market](/parking-guide-near-ben-thanh-market)"),
        ("/ben-thanh-market-ultimate-travel-guide", "Ben Thanh Market Ultimate Travel Guide", "planning your market visit with our [Ben Thanh Market ultimate travel guide](/ben-thanh-market-ultimate-travel-guide)"),
        ("/tan-son-nhat-airport-to-ben-thanh-transfer-guide", "Tan Son Nhat Airport Transfer Guide", "comparing airport vs downtown rates in our [Tan Son Nhat airport to Ben Thanh transfer guide](/tan-son-nhat-airport-to-ben-thanh-transfer-guide)")
    ],
    17: [
        ("/ben-thanh-central-metro-station-guide", "Ben Thanh Central Metro Station", "parking directly inside the modern [Ben Thanh Central Metro Station](/ben-thanh-central-metro-station-guide)"),
        ("/ben-thanh-one-day-walking-tour", "One-Day Ben Thanh Walking Tour", "embarking on our turn-by-turn [one-day Ben Thanh walking tour](/ben-thanh-one-day-walking-tour) after parking"),
        ("/things-to-do-near-ben-thanh-market", "Things to Do Near Ben Thanh Market", "visiting landmarks detailed in [things to do near Ben Thanh Market](/things-to-do-near-ben-thanh-market)"),
        ("/ben-thanh-market-ultimate-travel-guide", "Ben Thanh Market Ultimate Travel Guide", "entering through the main gates listed in our [Ben Thanh Market ultimate travel guide](/ben-thanh-market-ultimate-travel-guide)"),
        ("/money-exchange-ben-thanh-ha-tam-guide", "Money Exchange at Ha Tam Gold Shop", "parking to exchange cash at the [money exchange near Ben Thanh Market](/money-exchange-ben-thanh-ha-tam-guide)")
    ],
    18: [
        ("/ben-thanh-central-metro-station-guide", "Ben Thanh Central Metro Station", "connecting seamlessly to the [Ben Thanh Central Metro Station](/ben-thanh-central-metro-station-guide) on Line 1"),
        ("/boutique-hotels-near-ben-thanh", "Boutique Hotels Near Ben Thanh", "checking in to handpicked [boutique hotels near Ben Thanh](/boutique-hotels-near-ben-thanh)"),
        ("/things-to-do-near-ben-thanh-market", "Things to Do Near Ben Thanh Market", "spending your first afternoon exploring [things to do near Ben Thanh Market](/things-to-do-near-ben-thanh-market)"),
        ("/money-exchange-ben-thanh-ha-tam-guide", "Money Exchange at Ha Tam Gold Shop", "exchanging foreign cash downtown at the [money exchange near Ben Thanh Market](/money-exchange-ben-thanh-ha-tam-guide)"),
        ("/ben-thanh-market-scams-safety-guide", "Ben Thanh Market Scams & Safety Guide", "avoiding airport taxi traps with our [Ben Thanh Market scams and safety guide](/ben-thanh-market-scams-safety-guide)"),
        ("/tailor-made", "Tailor-Made Vietnam Journeys", "booking private VIP transfers and touring with our [tailor-made travel design](/tailor-made)")
    ]
}

CLUSTER_RECOMMENDATIONS_VI = {
    1: [
        ("/bao-tang-my-thuat-tphcm", "Bảo tàng Mỹ thuật TP.HCM", "thưởng lãm không gian kiến trúc cổ kính tại [Bảo tàng Mỹ thuật TP.HCM](/bao-tang-my-thuat-tphcm)"),
        ("/dinh-doc-lap-sai-gon", "Dinh Độc Lập", "chiêm ngưỡng dấu ấn lịch sử tại [Dinh Độc Lập](/dinh-doc-lap-sai-gon)"),
        ("/den-hindu-mariamman-sai-gon", "Đền Hindu Mariamman", "khám phá nét văn hóa tâm linh độc đáo tại [Đền Hindu Mariamman](/den-hindu-mariamman-sai-gon)"),
        ("/ga-ngam-metro-ben-thanh", "Ga ngầm Metro Bến Thành", "bước xuống khám phá kỳ quan hạ tầng [ga ngầm Metro Bến Thành](/ga-ngam-metro-ben-thanh)"),
        ("/am-thuc-cho-ben-thanh", "Ẩm thực chợ Bến Thành", "thưởng thức các món ngon trứ danh qua [cẩm nang ẩm thực chợ Bến Thành](/am-thuc-cho-ben-thanh)"),
        ("/lich-trinh-di-bo-ben-thanh-1-ngay", "Lịch trình đi bộ Bến Thành 1 ngày", "tối ưu thời gian khám phá với [lịch trình đi bộ quanh Bến Thành 1 ngày](/lich-trinh-di-bo-ben-thanh-1-ngay)")
    ],
    2: [
        ("/dia-diem-noi-tieng-quanh-ben-thanh", "Địa điểm nổi tiếng quanh Bến Thành", "kết nối với cẩm nang tổng hợp các [địa điểm nổi tiếng quanh Bến Thành](/dia-diem-noi-tieng-quanh-ben-thanh)"),
        ("/lich-trinh-di-bo-ben-thanh-1-ngay", "Lịch trình đi bộ Bến Thành 1 ngày", "đưa bảo tàng vào chặng tham quan của [lịch trình đi bộ Bến Thành 1 ngày](/lich-trinh-di-bo-ben-thanh-1-ngay)"),
        ("/ca-phe-chung-cu-gan-ben-thanh", "Cà phê chung cư gần Bến Thành", "thư giãn ngắm phố tại các quán [cà phê chung cư gần Bến Thành](/ca-phe-chung-cu-gan-ben-thanh) trên đường Tôn Thất Đạm"),
        ("/ga-ngam-metro-ben-thanh", "Ga ngầm Metro Bến Thành", "di chuyển thuận tiện qua tuyến tàu điện ngầm [ga ngầm Metro Bến Thành](/ga-ngam-metro-ben-thanh)"),
        ("/tour/ho-chi-minh-city-half-day-private-tour", "Tour Sài Gòn nửa ngày riêng tư", "đặt tour riêng có hướng dẫn viên chuyên sâu cùng [tour Sài Gòn nửa ngày riêng tư](/tour/ho-chi-minh-city-half-day-private-tour)")
    ],
    3: [
        ("/cho-ben-thanh-co-gi-choi", "Chợ Bến Thành có gì chơi", "khám phá trọn vẹn 15 trải nghiệm trong bài viết [chợ Bến Thành có gì chơi](/cho-ben-thanh-co-gi-choi)"),
        ("/tour/cooking-class-local-market", "Lớp học nấu ăn & Chợ truyền thống", "trải nghiệm tự tay đi chợ và nấu ăn cùng [lớp học nấu ăn và tour chợ truyền thống](/tour/cooking-class-local-market)"),
        ("/canh-bao-lua-dao-chat-chem-cho-ben-thanh", "Cảnh báo lừa đảo chặt chém", "nắm rõ giá cả và mẹo tiêu dùng an toàn qua [cảnh báo lừa đảo chặt chém tại chợ Bến Thành](/canh-bao-lua-dao-chat-chem-cho-ben-thanh)"),
        ("/rooftop-bar-view-cho-ben-thanh", "Rooftop bar view chợ Bến Thành", "ngắm nhìn phố xá lung linh về đêm tại các quán [rooftop bar view chợ Bến Thành](/rooftop-bar-view-cho-ben-thanh)"),
        ("/doi-ngoai-te-cho-ben-thanh-ha-tam", "Đổi ngoại tệ chợ Bến Thành Hà Tâm", "chuẩn bị sẵn tiền mặt đổi từ tiệm vàng uy tín trong hướng dẫn [đổi ngoại tệ chợ Bến Thành Hà Tâm](/doi-ngoai-te-cho-ben-thanh-ha-tam)")
    ],
    4: [
        ("/am-thuc-cho-ben-thanh", "Ẩm thực chợ Bến Thành", "lót dạ bữa sáng với cẩm nang [ẩm thực chợ Bến Thành](/am-thuc-cho-ben-thanh)"),
        ("/bao-tang-my-thuat-tphcm", "Bảo tàng Mỹ thuật TP.HCM", "thưởng lãm tranh lụa và kiến trúc Pháp tại [Bảo tàng Mỹ thuật TP.HCM](/bao-tang-my-thuat-tphcm)"),
        ("/dinh-doc-lap-sai-gon", "Dinh Độc Lập", "khám phá di tích lịch sử trọng điểm [Dinh Độc Lập](/dinh-doc-lap-sai-gon)"),
        ("/den-hindu-mariamman-sai-gon", "Đền Hindu Mariamman", "viếng thăm không gian thanh tịnh của [Đền Hindu Mariamman](/den-hindu-mariamman-sai-gon)"),
        ("/ga-ngam-metro-ben-thanh", "Ga ngầm Metro Bến Thành", "trải nghiệm không gian ngầm hiện đại tại [ga ngầm Metro Bến Thành](/ga-ngam-metro-ben-thanh)"),
        ("/xe-bus-2-tang-hop-on-hop-off-sai-gon", "Xe bus 2 tầng Hop-On Hop-Off", "lựa chọn phương tiện dạo mát ngắm cảnh trên [xe bus 2 tầng Hop-On Hop-Off Sài Gòn](/xe-bus-2-tang-hop-on-hop-off-sai-gon)")
    ],
    5: [
        ("/dia-diem-noi-tieng-quanh-ben-thanh", "Địa điểm nổi tiếng quanh Bến Thành", "kết nối Dinh vào mạng lưới di sản trong bài [địa điểm nổi tiếng quanh Bến Thành](/dia-diem-noi-tieng-quanh-ben-thanh)"),
        ("/lich-trinh-di-bo-ben-thanh-1-ngay", "Lịch trình đi bộ Bến Thành 1 ngày", "đưa công trình vào lịch trình tản bộ cùng [lịch trình đi bộ Bến Thành 1 ngày](/lich-trinh-di-bo-ben-thanh-1-ngay)"),
        ("/xe-bus-2-tang-hop-on-hop-off-sai-gon", "Xe bus 2 tầng Hop-On Hop-Off", "đón tuyến xe ngắm cảnh tiện lợi cùng [xe bus 2 tầng Hop-On Hop-Off Sài Gòn](/xe-bus-2-tang-hop-on-hop-off-sai-gon) ngay trước cổng"),
        ("/khach-san-boutique-gan-ben-thanh", "Khách sạn boutique gần Bến Thành", "nghỉ dưỡng phong cách tại các [khách sạn boutique gần Bến Thành](/khach-san-boutique-gan-ben-thanh)"),
        ("/tour/ho-chi-minh-city-half-day-private-tour", "Tour Sài Gòn nửa ngày riêng tư", "khám phá hầm tác chiến cùng hướng dẫn viên trong [tour Sài Gòn nửa ngày riêng tư](/tour/ho-chi-minh-city-half-day-private-tour)")
    ],
    6: [
        ("/cho-ben-thanh-co-gi-choi", "Chợ Bến Thành có gì chơi", "lối đi ngầm kết nối trực tiếp đến khu mua sắm [chợ Bến Thành có gì chơi](/cho-ben-thanh-co-gi-choi)"),
        ("/bai-gui-xe-quanh-cho-ben-thanh", "Bãi gửi xe quanh chợ Bến Thành", "tra cứu điểm gửi phương tiện cá nhân qua cẩm nang [bãi gửi xe quanh chợ Bến Thành](/bai-gui-xe-quanh-cho-ben-thanh)"),
        ("/di-tu-san-bay-tan-son-nhat-ve-ben-thanh", "Đi từ sân bay về Bến Thành", "di chuyển từ ga quốc tế theo hướng dẫn [đi từ sân bay Tân Sơn Nhất về Bến Thành](/di-tu-san-bay-tan-son-nhat-ve-ben-thanh)"),
        ("/dia-diem-noi-tieng-quanh-ben-thanh", "Địa điểm nổi tiếng quanh Bến Thành", "bước lên mặt đất để dạo quanh các [địa điểm nổi tiếng quanh Bến Thành](/dia-diem-noi-tieng-quanh-ben-thanh)"),
        ("/tailor-made", "Thiết kế tour riêng tailor-made", "lên kế hoạch du lịch kết hợp tàu điện đô thị cùng [dịch vụ tour riêng tailor-made](/tailor-made)")
    ],
    7: [
        ("/dia-diem-noi-tieng-quanh-ben-thanh", "Địa điểm nổi tiếng quanh Bến Thành", "ngôi đền là một trong những [địa điểm nổi tiếng quanh Bến Thành](/dia-diem-noi-tieng-quanh-ben-thanh) đậm nét văn hóa"),
        ("/lich-trinh-di-bo-ben-thanh-1-ngay", "Lịch trình đi bộ Bến Thành 1 ngày", "viếng đền vào buổi sáng trong [lịch trình đi bộ Bến Thành 1 ngày](/lich-trinh-di-bo-ben-thanh-1-ngay)"),
        ("/ca-phe-chung-cu-gan-ben-thanh", "Cà phê chung cư gần Bến Thành", "nghỉ ngơi thưởng thức cà phê tại các quán [cà phê chung cư gần Bến Thành](/ca-phe-chung-cu-gan-ben-thanh)"),
        ("/am-thuc-cho-ben-thanh", "Ẩm thực chợ Bến Thành", "thưởng thức bún mắm và món ngon gần đền với [cẩm nang ẩm thực chợ Bến Thành](/am-thuc-cho-ben-thanh)"),
        ("/tours", "Danh mục Tour The Rice Tour", "tham gia nhiều hành trình văn hóa độc đáo trong [danh mục tour The Rice Tour](/tours)")
    ],
    8: [
        ("/doi-ngoai-te-cho-ben-thanh-ha-tam", "Đổi ngoại tệ chợ Bến Thành Hà Tâm", "chuẩn bị tiền mặt trước khi mua sắm tại tiệm vàng trong bài [đổi ngoại tệ chợ Bến Thành Hà Tâm](/doi-ngoai-te-cho-ben-thanh-ha-tam)"),
        ("/canh-bao-lua-dao-chat-chem-cho-ben-thanh", "Cảnh báo lừa đảo chặt chém", "tránh bị hét giá và chèo kéo cùng [cảnh báo lừa đảo chặt chém tại chợ Bến Thành](/canh-bao-lua-dao-chat-chem-cho-ben-thanh)"),
        ("/cho-ben-thanh-co-gi-choi", "Chợ Bến Thành có gì chơi", "nắm rõ sơ đồ các sạp hàng qua cẩm nang [chợ Bến Thành có gì chơi](/cho-ben-thanh-co-gi-choi)"),
        ("/kinh-nghiem-di-cho-ben-thanh", "Kinh nghiệm đi chợ Bến Thành", "tra cứu khung giờ vàng và bí quyết mua sắm trong [kinh nghiệm đi chợ Bến Thành toàn tập](/kinh-nghiem-di-cho-ben-thanh)"),
        ("/khan-ran-nam-bo", "Khăn rằn Nam Bộ", "tìm mua khăn rằn dệt thủ công đúng chuẩn di sản văn hóa qua bài viết [khăn rằn Nam Bộ](/khan-ran-nam-bo)")
    ],
    9: [
        ("/dia-diem-noi-tieng-quanh-ben-thanh", "Địa điểm nổi tiếng quanh Bến Thành", "kết nối mạng lưới danh thắng trong [địa điểm nổi tiếng quanh Bến Thành](/dia-diem-noi-tieng-quanh-ben-thanh)"),
        ("/dinh-doc-lap-sai-gon", "Dinh Độc Lập", "xe buýt đưa đón thuận tiện trước cổng [Dinh Độc Lập](/dinh-doc-lap-sai-gon)"),
        ("/ga-ngam-metro-ben-thanh", "Ga ngầm Metro Bến Thành", "trạm trung chuyển nằm ngay bên cạnh [ga ngầm Metro Bến Thành](/ga-ngam-metro-ben-thanh)"),
        ("/lich-trinh-di-bo-ben-thanh-1-ngay", "Lịch trình đi bộ Bến Thành 1 ngày", "kết hợp dạo phố bằng bước chân theo [lịch trình đi bộ Bến Thành 1 ngày](/lich-trinh-di-bo-ben-thanh-1-ngay)"),
        ("/tour/ho-chi-minh-city-half-day-private-tour", "Tour Sài Gòn nửa ngày riêng tư", "trải nghiệm city tour có thuyết minh lịch sử riêng cùng [tour Sài Gòn nửa ngày riêng tư](/tour/ho-chi-minh-city-half-day-private-tour)")
    ],
    10: [
        ("/dia-diem-noi-tieng-quanh-ben-thanh", "Địa điểm nổi tiếng quanh Bến Thành", "tọa lạc trong cụm văn hóa di sản [địa điểm nổi tiếng quanh Bến Thành](/dia-diem-noi-tieng-quanh-ben-thanh)"),
        ("/bao-tang-my-thuat-tphcm", "Bảo tàng Mỹ thuật TP.HCM", "chỉ cách vài bước chân để sang tham quan [Bảo tàng Mỹ thuật TP.HCM](/bao-tang-my-thuat-tphcm)"),
        ("/rooftop-bar-view-cho-ben-thanh", "Rooftop bar view chợ Bến Thành", "thưởng thức đồ uống tầng cao ngắm hoàng hôn tại các quán [rooftop bar view chợ Bến Thành](/rooftop-bar-view-cho-ben-thanh)"),
        ("/lich-trinh-di-bo-ben-thanh-1-ngay", "Lịch trình đi bộ Bến Thành 1 ngày", "nghỉ chân thưởng thức cà phê giữa [lịch trình đi bộ Bến Thành 1 ngày](/lich-trinh-di-bo-ben-thanh-1-ngay)"),
        ("/bai-gui-xe-quanh-cho-ben-thanh", "Bãi gửi xe quanh chợ Bến Thành", "chọn bãi gửi xe máy an toàn qua cẩm nang [bãi gửi xe quanh chợ Bến Thành](/bai-gui-xe-quanh-cho-ben-thanh)")
    ],
    11: [
        ("/dia-diem-noi-tieng-quanh-ben-thanh", "Địa điểm nổi tiếng quanh Bến Thành", "bao quát toàn cảnh khu vực di sản trong [địa điểm nổi tiếng quanh Bến Thành](/dia-diem-noi-tieng-quanh-ben-thanh)"),
        ("/am-thuc-cho-ben-thanh", "Ẩm thực chợ Bến Thành", "lót dạ bữa tối ấm nóng theo cẩm nang [ẩm thực chợ Bến Thành](/am-thuc-cho-ben-thanh) trước khi lên bar"),
        ("/ca-phe-chung-cu-gan-ben-thanh", "Cà phê chung cư gần Bến Thành", "dành buổi chiều khám phá sự mộc mạc ở các quán [cà phê chung cư gần Bến Thành](/ca-phe-chung-cu-gan-ben-thanh)"),
        ("/khach-san-boutique-gan-ben-thanh", "Khách sạn boutique gần Bến Thành", "lựa chọn lưu trú tại các [khách sạn boutique gần Bến Thành](/khach-san-boutique-gan-ben-thanh) có rooftop sang trọng"),
        ("/di-tu-san-bay-tan-son-nhat-ve-ben-thanh", "Đi từ sân bay về Bến Thành", "di chuyển ra sân bay đêm muộn thuận tiện theo hướng dẫn [đi từ sân bay Tân Sơn Nhất về Bến Thành](/di-tu-san-bay-tan-son-nhat-ve-ben-thanh)")
    ],
    12: [
        ("/cho-ben-thanh-co-gi-choi", "Chợ Bến Thành có gì chơi", "bước chân ra cửa sảnh khách sạn là đến ngay [chợ Bến Thành có gì chơi](/cho-ben-thanh-co-gi-choi)"),
        ("/di-tu-san-bay-tan-son-nhat-ve-ben-thanh", "Đi từ sân bay về Bến Thành", "lên lộ trình đón xe từ sân bay về khách sạn với bài [đi từ sân bay Tân Sơn Nhất về Bến Thành](/di-tu-san-bay-tan-son-nhat-ve-ben-thanh)"),
        ("/lich-trinh-di-bo-ben-thanh-1-ngay", "Lịch trình đi bộ Bến Thành 1 ngày", "bắt đầu chuyến tản bộ khám phá Sài Gòn với [lịch trình đi bộ Bến Thành 1 ngày](/lich-trinh-di-bo-ben-thanh-1-ngay)"),
        ("/rooftop-bar-view-cho-ben-thanh", "Rooftop bar view chợ Bến Thành", "thư giãn ngắm phố thị lung linh tại các quán [rooftop bar view chợ Bến Thành](/rooftop-bar-view-cho-ben-thanh)"),
        ("/tailor-made", "Dịch vụ tour riêng tailor-made", "đặt xe đưa đón VIP và lịch trình thiết kế riêng tại [dịch vụ tour riêng tailor-made](/tailor-made)")
    ],
    13: [
        ("/am-thuc-cho-ben-thanh", "Ẩm thực chợ Bến Thành", "khu ẩm thực phong phú với bún riêu và chè Nam Bộ trong bài [ẩm thực chợ Bến Thành](/am-thuc-cho-ben-thanh)"),
        ("/kinh-nghiem-mua-sam-cho-ben-thanh", "Kinh nghiệm mua sắm chợ Bến Thành", "bỏ túi bí quyết trả giá nhã nhặn qua cẩm nang [kinh nghiệm mua sắm chợ Bến Thành](/kinh-nghiem-mua-sam-cho-ben-thanh)"),
        ("/canh-bao-lua-dao-chat-chem-cho-ben-thanh", "Cảnh báo lừa đảo chặt chém", "nhận biết các sạp bán đúng giá theo [cảnh báo lừa đảo chặt chém tại chợ Bến Thành](/canh-bao-lua-dao-chat-chem-cho-ben-thanh)"),
        ("/dia-diem-noi-tieng-quanh-ben-thanh", "Địa điểm nổi tiếng quanh Bến Thành", "bước ra ngoài cửa chợ để khám phá thêm các [địa điểm nổi tiếng quanh Bến Thành](/dia-diem-noi-tieng-quanh-ben-thanh)"),
        ("/ga-ngam-metro-ben-thanh", "Ga ngầm Metro Bến Thành", "Cửa Nam chợ kết nối trực tiếp xuống [ga ngầm Metro Bến Thành](/ga-ngam-metro-ben-thanh)")
    ],
    14: [
        ("/cho-ben-thanh-co-gi-choi", "Chợ Bến Thành có gì chơi", "khám phá danh sách các mặt hàng đặc sắc trong bài [chợ Bến Thành có gì chơi](/cho-ben-thanh-co-gi-choi)"),
        ("/di-tu-san-bay-tan-son-nhat-ve-ben-thanh", "Đi từ sân bay về Bến Thành", "lựa chọn phương tiện từ phi trường về chợ theo bài [đi từ sân bay Tân Sơn Nhất về Bến Thành](/di-tu-san-bay-tan-son-nhat-ve-ben-thanh)"),
        ("/bai-gui-xe-quanh-cho-ben-thanh", "Bãi gửi xe quanh chợ Bến Thành", "tìm điểm gửi xe máy và ô tô thuận tiện qua cẩm nang [bãi gửi xe quanh chợ Bến Thành](/bai-gui-xe-quanh-cho-ben-thanh)"),
        ("/doi-ngoai-te-cho-ben-thanh-ha-tam", "Đổi ngoại tệ chợ Bến Thành Hà Tâm", "đổi tiền với tỷ giá cạnh tranh tại tiệm vàng trong bài [đổi ngoại tệ chợ Bến Thành Hà Tâm](/doi-ngoai-te-cho-ben-thanh-ha-tam)"),
        ("/canh-bao-lua-dao-chat-chem-cho-ben-thanh", "Cảnh báo lừa đảo chặt chém", "bảo vệ tài sản và tránh bị ép giá cùng cẩm nang [cảnh báo lừa đảo chặt chém tại chợ Bến Thành](/canh-bao-lua-dao-chat-chem-cho-ben-thanh)")
    ],
    15: [
        ("/kinh-nghiem-mua-sam-cho-ben-thanh", "Kinh nghiệm mua sắm chợ Bến Thành", "cách trả giá văn minh và chọn hàng đúng giá qua bài [kinh nghiệm mua sắm chợ Bến Thành](/kinh-nghiem-mua-sam-cho-ben-thanh)"),
        ("/doi-ngoai-te-cho-ben-thanh-ha-tam", "Đổi ngoại tệ chợ Bến Thành Hà Tâm", "tuyệt đối không đổi tiền ở điểm trôi nổi, nên đến tiệm vàng trong bài [đổi ngoại tệ chợ Bến Thành Hà Tâm](/doi-ngoai-te-cho-ben-thanh-ha-tam)"),
        ("/di-tu-san-bay-tan-son-nhat-ve-ben-thanh", "Đi từ sân bay về Bến Thành", "cảnh giác với taxi dù từ sân bay theo hướng dẫn [đi từ sân bay Tân Sơn Nhất về Bến Thành](/di-tu-san-bay-tan-son-nhat-ve-ben-thanh)"),
        ("/kinh-nghiem-di-cho-ben-thanh", "Kinh nghiệm đi chợ Bến Thành", "xem khung giờ mở cửa và sạp hàng uy tín trong cẩm nang [kinh nghiệm đi chợ Bến Thành toàn tập](/kinh-nghiem-di-cho-ben-thanh)"),
        ("/am-thuc-cho-ben-thanh", "Ẩm thực chợ Bến Thành", "lựa chọn các quầy ăn niêm yết giá rõ ràng trong [cẩm nang ẩm thực chợ Bến Thành](/am-thuc-cho-ben-thanh)")
    ],
    16: [
        ("/kinh-nghiem-mua-sam-cho-ben-thanh", "Kinh nghiệm mua sắm chợ Bến Thành", "sử dụng tiền mặt hiệu quả khi mua hàng theo bài [kinh nghiệm mua sắm chợ Bến Thành](/kinh-nghiem-mua-sam-cho-ben-thanh)"),
        ("/canh-bao-lua-dao-chat-chem-cho-ben-thanh", "Cảnh báo lừa đảo chặt chém", "nhận biết các thủ đoạn tráo tiền và lừa đảo qua [cảnh báo lừa đảo chặt chém tại chợ Bến Thành](/canh-bao-lua-dao-chat-chem-cho-ben-thanh)"),
        ("/bai-gui-xe-quanh-cho-ben-thanh", "Bãi gửi xe quanh chợ Bến Thành", "gửi xe máy an toàn khi đến tiệm vàng Phan Chu Trinh theo [bãi gửi xe quanh chợ Bến Thành](/bai-gui-xe-quanh-cho-ben-thanh)"),
        ("/kinh-nghiem-di-cho-ben-thanh", "Kinh nghiệm đi chợ Bến Thành", "kết hợp đổi tiền và dạo chợ với [kinh nghiệm đi chợ Bến Thành toàn tập](/kinh-nghiem-di-cho-ben-thanh)"),
        ("/di-tu-san-bay-tan-son-nhat-ve-ben-thanh", "Đi từ sân bay về Bến Thành", "so sánh tỷ giá giữa trung tâm và sân bay trong bài [đi từ sân bay Tân Sơn Nhất về Bến Thành](/di-tu-san-bay-tan-son-nhat-ve-ben-thanh)")
    ],
    17: [
        ("/ga-ngam-metro-ben-thanh", "Ga ngầm Metro Bến Thành", "tùy chọn gửi xe hiện đại dưới lòng đất tại [ga ngầm Metro Bến Thành](/ga-ngam-metro-ben-thanh)"),
        ("/lich-trinh-di-bo-ben-thanh-1-ngay", "Lịch trình đi bộ Bến Thành 1 ngày", "sau khi gửi xe an toàn, bạn có thể bắt đầu [lịch trình đi bộ Bến Thành 1 ngày](/lich-trinh-di-bo-ben-thanh-1-ngay)"),
        ("/dia-diem-noi-tieng-quanh-ben-thanh", "Địa điểm nổi tiếng quanh Bến Thành", "tản bộ khám phá cụm di tích xung quanh qua bài [địa điểm nổi tiếng quanh Bến Thành](/dia-diem-noi-tieng-quanh-ben-thanh)"),
        ("/kinh-nghiem-di-cho-ben-thanh", "Kinh nghiệm đi chợ Bến Thành", "xác định cổng vào chợ gần nhất theo [kinh nghiệm đi chợ Bến Thành toàn tập](/kinh-nghiem-di-cho-ben-thanh)"),
        ("/doi-ngoai-te-cho-ben-thanh-ha-tam", "Đổi ngoại tệ chợ Bến Thành Hà Tâm", "chỗ gửi xe tiện lợi khi đến tiệm vàng trong hướng dẫn [đổi ngoại tệ chợ Bến Thành Hà Tâm](/doi-ngoai-te-cho-ben-thanh-ha-tam)")
    ],
    18: [
        ("/ga-ngam-metro-ben-thanh", "Ga ngầm Metro Bến Thành", "về đến trung tâm, bạn có thể kết nối mạng lưới tàu điện tại [ga ngầm Metro Bến Thành](/ga-ngam-metro-ben-thanh)"),
        ("/khach-san-boutique-gan-ben-thanh", "Khách sạn boutique gần Bến Thành", "nghỉ ngơi tại các không gian lưu trú sang trọng trong bài [khách sạn boutique gần Bến Thành](/khach-san-boutique-gan-ben-thanh)"),
        ("/dia-diem-noi-tieng-quanh-ben-thanh", "Địa điểm nổi tiếng quanh Bến Thành", "khám phá ngay nhịp sống phố thị qua danh sách [địa điểm nổi tiếng quanh Bến Thành](/dia-diem-noi-tieng-quanh-ben-thanh)"),
        ("/doi-ngoai-te-cho-ben-thanh-ha-tam", "Đổi ngoại tệ chợ Bến Thành Hà Tâm", "đổi tiền mặt với tỷ giá tốt hơn tại trung tâm theo bài [đổi ngoại tệ chợ Bến Thành Hà Tâm](/doi-ngoai-te-cho-ben-thanh-ha-tam)"),
        ("/canh-bao-lua-dao-chat-chem-cho-ben-thanh", "Cảnh báo lừa đảo chặt chém", "cảnh giác với taxi gian lận giá cước theo [cảnh báo lừa đảo chặt chém tại chợ Bến Thành](/canh-bao-lua-dao-chat-chem-cho-ben-thanh)"),
        ("/tailor-made", "Dịch vụ tour riêng tailor-made", "đặt dịch vụ xe đưa đón VIP riêng tư và thiết kế lịch trình tại [dịch vụ tour riêng tailor-made](/tailor-made)")
    ]
}

def clean_frontmatter_links(fm):
    # Strip any [text](url) inside frontmatter back to text
    return re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', fm)

def inject_links_into_document(content, recs, is_vi=False):
    parts = content.split('---', 2)
    if len(parts) >= 3:
        fm = clean_frontmatter_links(parts[1])
        body = parts[2]
    else:
        fm = ""
        body = content

    # 1. Clean cross-language URLs if Vietnamese
    if is_vi:
        body = clean_vi_cross_language_links(body)
    
    # 2. Extract currently linked URLs in the body
    current_links = re.findall(r'\[([^\]]+)\]\((/[^\)]+)\)', body)
    linked_urls = set(u for _, u in current_links)
    
    # Determine the slug of current document to avoid self-linking
    m_slug = re.search(r'^slug:\s*["\']?([^"\'\n]+)["\']?', fm, re.M)
    self_url = f"/{m_slug.group(1).strip()}" if m_slug else ""
    
    # Filter recommendations: must not be self-url and not already linked
    needed = []
    for target_url, anchor, phrase in recs:
        if target_url == self_url:
            continue
        if target_url in linked_urls:
            continue
        valid_set = VALID_VI if is_vi else VALID_EN
        if target_url not in valid_set:
            continue
        needed.append((target_url, anchor, phrase))
    
    # Try contextual inline injection if keywords match in body
    for target_url, anchor, phrase in list(needed):
        pattern = rf'(?<!\[)({re.escape(anchor)})(?!\])'
        if re.search(pattern, body):
            # Replace only the first occurrence in body
            body = re.sub(pattern, rf'[\1]({target_url})', body, count=1)
            linked_urls.add(target_url)
            needed.remove((target_url, anchor, phrase))
            
    # If there are still needed links to reach 4-6 links, build an elegant cluster navigation block
    if needed and len(linked_urls) < 6:
        block_title = "## 🗺️ Liên Kết Hành Trình & Điểm Đến Lân Cận" if is_vi else "## 🗺️ Curated Cluster Connections"
        intro_phrase = "Để tối ưu hành trình khám phá khu vực trung tâm Bến Thành, mời bạn tham khảo thêm các cẩm nang chuyên sâu liên quan:" if is_vi else "To help you navigate District 1 with ease, explore our companion heritage guides:"
        
        items = []
        for target_url, anchor, phrase in needed:
            if len(linked_urls) >= 6:
                break
            items.append(f"- **{anchor}:** {phrase}.")
            linked_urls.add(target_url)
        
        if items:
            block_content = f"\n---\n\n{block_title}\n\n{intro_phrase}\n" + "\n".join(items) + "\n\n"
            
            # Place right before the final closing section or epilogue
            if is_vi:
                pos = body.find("## Lời Kết")
                if pos == -1: pos = body.find("## Closing Thoughts")
            else:
                pos = body.find("## Closing Thoughts")
                if pos == -1: pos = body.find("## Epilogue")
                
            if pos != -1:
                body = body[:pos] + block_content + body[pos:]
            else:
                body = body + "\n\n" + block_content

    return f"---{fm}---{body}"

def process_all_files():
    en_files = sorted(glob.glob('content-pipeline/campaign-ben-thanh/english/*.md'))
    vi_files = sorted(glob.glob('content-pipeline/campaign-ben-thanh/vietnamese/*.md'))
    
    print(f"Processing {len(en_files)} English files and {len(vi_files)} Vietnamese files...")
    
    # 1. Process English files
    for idx, ef in enumerate(en_files, 1):
        content = open(ef, 'r', encoding='utf-8').read()
        recs = CLUSTER_RECOMMENDATIONS_EN.get(idx, [])
        new_content = inject_links_into_document(content, recs, is_vi=False)
        
        # Write to campaign-ben-thanh/english/ and 04-english/
        with open(ef, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        mirror_ef = ef.replace('campaign-ben-thanh/english', '04-english')
        if os.path.exists(mirror_ef):
            with open(mirror_ef, 'w', encoding='utf-8') as f:
                f.write(new_content)
                
        # Verification
        final_links = re.findall(r'\[([^\]]+)\]\((/[^\)]+)\)', new_content)
        final_urls = [u for _, u in final_links]
        assert len(final_urls) == len(set(final_urls)), f"Duplicate URL in {ef}: {final_urls}"
        for u in final_urls:
            assert u in VALID_EN, f"Invalid EN URL in {ef}: {u}"
        print(f"  [EN {idx:02d}] {os.path.basename(ef)} -> {len(final_urls)} verified unique links")

    # 2. Process Vietnamese files
    for idx, vf in enumerate(vi_files, 1):
        content = open(vf, 'r', encoding='utf-8').read()
        recs = CLUSTER_RECOMMENDATIONS_VI.get(idx, [])
        new_content = inject_links_into_document(content, recs, is_vi=True)
        
        # Write to campaign-ben-thanh/vietnamese/, 03-qa-passed/, 02-vietnamese-guu/
        with open(vf, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        mirror_v3 = vf.replace('campaign-ben-thanh/vietnamese', '03-qa-passed')
        if os.path.exists(mirror_v3):
            with open(mirror_v3, 'w', encoding='utf-8') as f:
                f.write(new_content)
                
        mirror_v2 = vf.replace('campaign-ben-thanh/vietnamese', '02-vietnamese-guu')
        if os.path.exists(mirror_v2):
            with open(mirror_v2, 'w', encoding='utf-8') as f:
                f.write(new_content)
                
        # Verification
        final_links = re.findall(r'\[([^\]]+)\]\((/[^\)]+)\)', new_content)
        final_urls = [u for _, u in final_links]
        assert len(final_urls) == len(set(final_urls)), f"Duplicate URL in {vf}: {final_urls}"
        for u in final_urls:
            assert u in VALID_VI, f"Invalid VI URL in {vf}: {u}"
        print(f"  [VI {idx:02d}] {os.path.basename(vf)} -> {len(final_urls)} verified unique links")

if __name__ == '__main__':
    process_all_files()
