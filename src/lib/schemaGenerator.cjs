"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationSchema = void 0;
exports.cleanSchema = cleanSchema;
exports.generateBlogSchema = generateBlogSchema;
// Core utility to clean up undefined, null, or empty string values from schema objects
function cleanSchema(obj) {
    if (obj === null || obj === undefined || obj === '') {
        return undefined;
    }
    if (Array.isArray(obj)) {
        var cleaned = obj.map(cleanSchema).filter(function (item) { return item !== undefined; });
        return cleaned.length > 0 ? cleaned : undefined;
    }
    if (typeof obj === 'object') {
        var cleaned = {};
        for (var key in obj) {
            var val = cleanSchema(obj[key]);
            if (val !== undefined) {
                cleaned[key] = val;
            }
        }
        return Object.keys(cleaned).length > 0 ? cleaned : undefined;
    }
    return obj;
}
// Global Publisher Singleton
exports.organizationSchema = {
    "@type": "Organization",
    "@id": "https://fittour.vn/#organization",
    "name": "FIT TOUR",
    "url": "https://fittour.vn",
    "logo": {
        "@type": "ImageObject",
        "url": "https://media.thericetour.com/uploads/logo-the-rice.webp",
        "width": 512,
        "height": 512
    }
};
function generateBlogSchema(props) {
    var title = props.title, description = props.description, canonicalUrl = props.canonicalUrl, image = props.image, datePublished = props.datePublished, dateModified = props.dateModified, authorName = props.authorName, category = props.category, tags = props.tags, faqQuestions = props.faqQuestions;
    // Determine Author Type (Person vs Organization)
    var authorObj;
    if (authorName && (authorName.toLowerCase() === 'admin' || authorName.toLowerCase() === 'fit tour')) {
        authorObj = {
            "@type": "Organization",
            "name": "FIT TOUR"
        };
    }
    else {
        authorObj = {
            "@type": "Person",
            "name": authorName || "Huynh Hieu Travel"
        };
    }
    // Keywords formatting
    var keywordArray = [];
    if (category && category.name)
        keywordArray.push(category.name);
    if (tags && tags.length > 0) {
        keywordArray.push.apply(keywordArray, tags.map(function (t) { return t.name; }));
    }
    var keywordsStr = keywordArray.length > 0 ? keywordArray.join(", ") : undefined;
    // 1. BlogPosting Schema
    var blogPosting = {
        "@type": "BlogPosting",
        "@id": "".concat(canonicalUrl, "#article"),
        "mainEntityOfPage": canonicalUrl,
        "url": canonicalUrl,
        "headline": title,
        "description": description || title,
        "inLanguage": "vi-VN",
        "image": image ? [image] : [],
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "author": authorObj,
        "publisher": { "@id": "https://fittour.vn/#organization" },
        "keywords": keywordsStr
    };
    // 2. BreadcrumbList Schema
    var breadcrumbItems = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Trang chủ",
            "item": "https://fittour.vn"
        }
    ];
    if (category && category.name) {
        // We assume categories might be at /chuyen-muc/slug or /slug depending on routing. 
        // Usually they are absolute so we format them.
        var catUrl = category.slug ? "https://fittour.vn/".concat(category.slug) : undefined;
        breadcrumbItems.push(__assign({ "@type": "ListItem", "position": 2, "name": category.name }, (catUrl && { "item": catUrl })));
        breadcrumbItems.push({
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": canonicalUrl
        });
    }
    else {
        breadcrumbItems.push({
            "@type": "ListItem",
            "position": 2,
            "name": title,
            "item": canonicalUrl
        });
    }
    var breadcrumbList = {
        "@type": "BreadcrumbList",
        "@id": "".concat(canonicalUrl, "#breadcrumb"),
        "itemListElement": breadcrumbItems
    };
    // 3. Assemble Graph
    var graphNodes = [exports.organizationSchema, blogPosting, breadcrumbList];
    // 4. FAQPage Override (if faq questions exist)
    if (faqQuestions && faqQuestions.length > 0) {
        var faqSchema = {
            "@type": "FAQPage",
            "@id": "".concat(canonicalUrl, "#faq"),
            "mainEntity": faqQuestions.map(function (q) { return ({
                "@type": "Question",
                "name": q.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": q.answer
                }
            }); })
        };
        graphNodes.push(faqSchema);
    }
    // Final structured graph
    var finalGraph = {
        "@context": "https://schema.org",
        "@graph": graphNodes
    };
    return cleanSchema(finalGraph);
}
