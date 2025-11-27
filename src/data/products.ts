import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'tirzepatide-niacinamide',
    slug: 'tirzepatide-niacinamide-injection',
    name: 'Tirzepatide / Niacinamide Injection',
    badge: 'Price Reduction!',
    images: [
      '/images/products/tirzepatide.png',
      '/images/products/tirzepatide.png',
      '/images/products/tirzepatide.png',
    ],
    dosageStrengths: [
      {
        label: 'Tirzepatide / Niacinamide Injection (4 mL Vial)',
        value: '17 / 2 mg/mL',
      },
      {
        label: 'Tirzepatide / Niacinamide Injection (2.5 mL Vial)',
        value: '8 / 2 mg/mL',
      },
    ],
    overview: [
      {
        id: 'about',
        title: 'About Tirzepatide / Niacinamide Injection',
        content:
          'Tirzepatide is a once-weekly injectable medication that works by mimicking the effects of natural hormones called incretins. It helps regulate blood sugar levels and promotes weight loss by slowing gastric emptying and reducing appetite. Niacinamide (vitamin B3) is added to help reduce injection site reactions and support overall metabolic health.',
      },
      {
        id: 'dosage',
        title: 'Dosage',
        content:
          'The recommended starting dose is typically 2.5 mg once weekly for 4 weeks. The dose may be increased in 2.5 mg increments every 4 weeks based on tolerability and therapeutic response. The maximum recommended dose is 15 mg once weekly. Always follow your healthcare provider\'s specific instructions.',
      },
      {
        id: 'contraindications',
        title: 'Contraindications & Precautions',
        content:
          'Do not use if you have a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Not recommended for patients with a history of pancreatitis. Use with caution in patients with renal impairment or diabetic retinopathy.',
      },
      {
        id: 'interactions',
        title: 'Interactions',
        content:
          'Tirzepatide may affect the absorption of oral medications due to delayed gastric emptying. Use caution when taking with insulin or insulin secretagogues as this may increase the risk of hypoglycemia. Inform your healthcare provider of all medications you are currently taking.',
      },
      {
        id: 'side-effects',
        title: 'Adverse Reactions / Side Effects',
        content:
          'Common side effects include nausea, diarrhea, decreased appetite, vomiting, constipation, dyspepsia, and abdominal pain. These are usually mild to moderate and often improve over time. Contact your healthcare provider if you experience severe or persistent symptoms.',
      },
      {
        id: 'pregnancy',
        title: 'Pregnancy & Breastfeeding',
        content:
          'Tirzepatide should not be used during pregnancy. Discontinue at least 2 months before a planned pregnancy due to the long half-life of the medication. It is not known whether tirzepatide passes into breast milk. Consult with your healthcare provider before breastfeeding.',
      },
      {
        id: 'storage',
        title: 'Storage',
        content:
          'Store refrigerated at 36°F to 46°F (2°C to 8°C). Do not freeze. Protect from light. Once in use, the medication may be stored at room temperature up to 86°F (30°C) for up to 21 days. Do not use after the expiration date.',
      },
      {
        id: 'faq',
        title: 'Frequently Asked Questions',
        content:
          'Q: How is this medication administered? A: It is injected subcutaneously once weekly in the abdomen, thigh, or upper arm. Q: Can I take this with other diabetes medications? A: Consult your healthcare provider about combining with other medications. Q: What if I miss a dose? A: Take the missed dose as soon as possible within 4 days. If more than 4 days have passed, skip the missed dose.',
      },
    ],
    relatedProductIds: ['semaglutide-cyanocobalamin', 'nad-injection', 'sermorelin-acetate'],
    faqs: [
      {
        question: 'I am interested in your compounds, can you recommend a physician for me?',
        answer:
          'While we cannot directly recommend specific physicians, we can provide you with resources to find healthcare providers in your area who are familiar with compounded medications. Please contact our customer service team for assistance.',
      },
      {
        question: 'Where can I find the osmolarity of your product?',
        answer:
          'Osmolarity information is available on the Certificate of Analysis (COA) for each batch. You can request this document by contacting our pharmacy directly or through your healthcare provider.',
      },
      {
        question: 'I did not see the item I am looking for on your site; does that mean it is unavailable?',
        answer:
          'Not necessarily. We compound a wide variety of medications beyond what is listed on our website. Please contact us directly to inquire about specific formulations or compounds you need.',
      },
      {
        question: 'Where are your ingredients sourced from?',
        answer:
          'All active pharmaceutical ingredients (APIs) are sourced from FDA-registered facilities and undergo rigorous quality testing. We maintain full traceability and documentation for all raw materials used in our compounded medications.',
      },
    ],
  },
  {
    id: 'semaglutide-cyanocobalamin',
    slug: 'semaglutide-cyanocobalamin-injection',
    name: 'Semaglutide / Cyanocobalamin Injection',
    images: [
      '/images/products/semaglutide.png',
      '/images/products/semaglutide.png',
      '/images/products/semaglutide.png',
    ],
    dosageStrengths: [
      {
        label: 'Semaglutide / Cyanocobalamin Injection (2.5 mL Vial)',
        value: '5 / 0.5 mg/mL',
      },
    ],
    overview: [
      {
        id: 'about',
        title: 'About Semaglutide / Cyanocobalamin Injection',
        content:
          'Semaglutide is a GLP-1 receptor agonist that helps regulate blood sugar and promotes weight loss. Cyanocobalamin (vitamin B12) is added to support energy levels and prevent B12 deficiency that can occur with GLP-1 medications.',
      },
      {
        id: 'dosage',
        title: 'Dosage',
        content:
          'Starting dose is typically 0.25 mg once weekly, gradually increased over several weeks. Follow your healthcare provider\'s dosing schedule.',
      },
      {
        id: 'contraindications',
        title: 'Contraindications & Precautions',
        content:
          'Do not use if you have a personal or family history of medullary thyroid carcinoma or MEN 2 syndrome.',
      },
      {
        id: 'interactions',
        title: 'Interactions',
        content:
          'May affect absorption of oral medications. Use caution with insulin or sulfonylureas.',
      },
      {
        id: 'side-effects',
        title: 'Adverse Reactions / Side Effects',
        content:
          'Common side effects include nausea, vomiting, diarrhea, and constipation.',
      },
      {
        id: 'pregnancy',
        title: 'Pregnancy & Breastfeeding',
        content:
          'Not recommended during pregnancy or breastfeeding.',
      },
      {
        id: 'storage',
        title: 'Storage',
        content:
          'Store refrigerated at 36°F to 46°F. Protect from light.',
      },
      {
        id: 'faq',
        title: 'Frequently Asked Questions',
        content:
          'Contact your healthcare provider for specific questions about this medication.',
      },
    ],
    relatedProductIds: ['tirzepatide-niacinamide', 'nad-injection', 'sermorelin-acetate'],
    faqs: [
      {
        question: 'I am interested in your compounds, can you recommend a physician for me?',
        answer:
          'Please contact our customer service team for resources to find healthcare providers familiar with compounded medications.',
      },
      {
        question: 'Where can I find the osmolarity of your product?',
        answer:
          'Osmolarity information is available on the Certificate of Analysis (COA) for each batch.',
      },
      {
        question: 'I did not see the item I am looking for on your site; does that mean it is unavailable?',
        answer:
          'We compound many medications beyond what is listed. Please contact us to inquire about specific formulations.',
      },
      {
        question: 'Where are your ingredients sourced from?',
        answer:
          'All APIs are sourced from FDA-registered facilities with rigorous quality testing.',
      },
    ],
  },
  {
    id: 'nad-injection',
    slug: 'nad-injection',
    name: 'NAD+ Injection (Lyo)',
    images: [
      '/images/products/nad.png',
      '/images/products/nad.png',
      '/images/products/nad.png',
    ],
    dosageStrengths: [
      {
        label: 'NAD+ Injection (Lyophilized)',
        value: '1,000 mg/Vial',
      },
    ],
    overview: [
      {
        id: 'about',
        title: 'About NAD+ Injection',
        content:
          'NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in all living cells that plays a crucial role in energy metabolism and cellular repair.',
      },
      {
        id: 'dosage',
        title: 'Dosage',
        content:
          'Dosing varies based on individual needs. Consult your healthcare provider for specific recommendations.',
      },
      {
        id: 'contraindications',
        title: 'Contraindications & Precautions',
        content:
          'Use with caution in patients with certain medical conditions. Consult your healthcare provider.',
      },
      {
        id: 'interactions',
        title: 'Interactions',
        content:
          'May interact with certain medications. Inform your healthcare provider of all current medications.',
      },
      {
        id: 'side-effects',
        title: 'Adverse Reactions / Side Effects',
        content:
          'Side effects may include flushing, nausea, and discomfort at injection site.',
      },
      {
        id: 'pregnancy',
        title: 'Pregnancy & Breastfeeding',
        content:
          'Not recommended during pregnancy or breastfeeding without medical supervision.',
      },
      {
        id: 'storage',
        title: 'Storage',
        content:
          'Store refrigerated. Reconstituted solution should be used within specified timeframe.',
      },
      {
        id: 'faq',
        title: 'Frequently Asked Questions',
        content:
          'Contact your healthcare provider for specific questions about NAD+ therapy.',
      },
    ],
    relatedProductIds: ['tirzepatide-niacinamide', 'semaglutide-cyanocobalamin', 'sermorelin-acetate'],
    faqs: [
      {
        question: 'I am interested in your compounds, can you recommend a physician for me?',
        answer:
          'Please contact our customer service team for assistance finding healthcare providers.',
      },
      {
        question: 'Where can I find the osmolarity of your product?',
        answer:
          'Osmolarity information is available on the Certificate of Analysis (COA).',
      },
      {
        question: 'I did not see the item I am looking for on your site; does that mean it is unavailable?',
        answer:
          'We offer many compounds not listed. Please contact us for specific formulations.',
      },
      {
        question: 'Where are your ingredients sourced from?',
        answer:
          'All ingredients are sourced from FDA-registered facilities.',
      },
    ],
  },
  {
    id: 'sermorelin-acetate',
    slug: 'sermorelin-acetate-injection',
    name: 'Sermorelin Acetate Injection',
    images: [
      '/images/products/sermorelin.png',
      '/images/products/sermorelin.png',
      '/images/products/sermorelin.png',
    ],
    dosageStrengths: [
      {
        label: 'Sermorelin Acetate Injection',
        value: '15 mg/Vial',
      },
    ],
    overview: [
      {
        id: 'about',
        title: 'About Sermorelin Acetate Injection',
        content:
          'Sermorelin is a growth hormone-releasing hormone (GHRH) analog that stimulates the pituitary gland to produce and release growth hormone.',
      },
      {
        id: 'dosage',
        title: 'Dosage',
        content:
          'Dosing is individualized based on patient needs. Follow your healthcare provider\'s instructions.',
      },
      {
        id: 'contraindications',
        title: 'Contraindications & Precautions',
        content:
          'Not recommended for patients with active malignancy or certain medical conditions.',
      },
      {
        id: 'interactions',
        title: 'Interactions',
        content:
          'May interact with glucocorticoids and other medications affecting growth hormone.',
      },
      {
        id: 'side-effects',
        title: 'Adverse Reactions / Side Effects',
        content:
          'May include injection site reactions, headache, flushing, and dizziness.',
      },
      {
        id: 'pregnancy',
        title: 'Pregnancy & Breastfeeding',
        content:
          'Not recommended during pregnancy or breastfeeding.',
      },
      {
        id: 'storage',
        title: 'Storage',
        content:
          'Store refrigerated. Protect from light.',
      },
      {
        id: 'faq',
        title: 'Frequently Asked Questions',
        content:
          'Consult your healthcare provider for questions about sermorelin therapy.',
      },
    ],
    relatedProductIds: ['tirzepatide-niacinamide', 'semaglutide-cyanocobalamin', 'nad-injection'],
    faqs: [
      {
        question: 'I am interested in your compounds, can you recommend a physician for me?',
        answer:
          'Contact our team for resources to find healthcare providers.',
      },
      {
        question: 'Where can I find the osmolarity of your product?',
        answer:
          'Available on the Certificate of Analysis for each batch.',
      },
      {
        question: 'I did not see the item I am looking for on your site; does that mean it is unavailable?',
        answer:
          'We compound many medications. Please inquire directly.',
      },
      {
        question: 'Where are your ingredients sourced from?',
        answer:
          'From FDA-registered facilities with quality testing.',
      },
    ],
  },
  {
    id: 'testosterone-cypionate',
    slug: 'testosterone-cypionate-injection',
    name: 'Testosterone Cypionate Injection',
    images: [
      '/images/products/testosterone.png',
      '/images/products/testosterone.png',
      '/images/products/testosterone.png',
    ],
    dosageStrengths: [
      {
        label: 'Testosterone Cypionate Injection',
        value: '200 mg/mL',
      },
    ],
    overview: [
      {
        id: 'about',
        title: 'About Testosterone Cypionate Injection',
        content:
          'Testosterone Cypionate is a synthetic form of testosterone used in hormone replacement therapy. It helps restore testosterone levels in men with hypogonadism and supports muscle mass, bone density, and overall well-being.',
      },
      {
        id: 'dosage',
        title: 'Dosage',
        content:
          'Dosing is individualized based on testosterone levels and patient response. Typical doses range from 50-400 mg administered every 2-4 weeks. Follow your healthcare provider\'s specific instructions.',
      },
      {
        id: 'contraindications',
        title: 'Contraindications & Precautions',
        content:
          'Not recommended for patients with prostate or breast cancer, severe cardiac, hepatic, or renal disease. Use with caution in patients with sleep apnea or polycythemia.',
      },
      {
        id: 'interactions',
        title: 'Interactions',
        content:
          'May interact with anticoagulants, insulin, and corticosteroids. Inform your healthcare provider of all medications you are taking.',
      },
      {
        id: 'side-effects',
        title: 'Adverse Reactions / Side Effects',
        content:
          'Common side effects include injection site reactions, acne, hair growth changes, and mood changes. Monitor for signs of polycythemia and cardiovascular effects.',
      },
      {
        id: 'pregnancy',
        title: 'Pregnancy & Breastfeeding',
        content:
          'Testosterone is contraindicated in pregnancy and breastfeeding due to potential virilization of the fetus.',
      },
      {
        id: 'storage',
        title: 'Storage',
        content:
          'Store at controlled room temperature 20°C to 25°C (68°F to 77°F). Protect from light.',
      },
      {
        id: 'faq',
        title: 'Frequently Asked Questions',
        content:
          'Contact your healthcare provider for specific questions about testosterone therapy.',
      },
    ],
    relatedProductIds: ['sermorelin-acetate', 'nad-injection', 'nandrolone-decanoate'],
    faqs: [
      {
        question: 'I am interested in your compounds, can you recommend a physician for me?',
        answer:
          'Please contact our customer service team for resources to find healthcare providers familiar with hormone therapy.',
      },
      {
        question: 'Where can I find the osmolarity of your product?',
        answer:
          'Osmolarity information is available on the Certificate of Analysis (COA) for each batch.',
      },
      {
        question: 'I did not see the item I am looking for on your site; does that mean it is unavailable?',
        answer:
          'We compound many medications beyond what is listed. Please contact us for specific formulations.',
      },
      {
        question: 'Where are your ingredients sourced from?',
        answer:
          'All APIs are sourced from FDA-registered facilities with rigorous quality testing.',
      },
    ],
  },
  {
    id: 'nandrolone-decanoate',
    slug: 'nandrolone-decanoate-injection',
    name: 'Nandrolone Decanoate Injection',
    images: [
      '/images/products/nandrolone.png',
      '/images/products/nandrolone.png',
      '/images/products/nandrolone.png',
    ],
    dosageStrengths: [
      {
        label: 'Nandrolone Decanoate Injection',
        value: '200 mg/mL',
      },
    ],
    overview: [
      {
        id: 'about',
        title: 'About Nandrolone Decanoate Injection',
        content:
          'Nandrolone Decanoate is an anabolic steroid used to treat anemia associated with renal insufficiency and to support muscle wasting conditions. It promotes protein synthesis and tissue building.',
      },
      {
        id: 'dosage',
        title: 'Dosage',
        content:
          'Dosing varies based on indication and patient factors. Typical doses range from 50-200 mg administered every 1-4 weeks. Follow your healthcare provider\'s instructions.',
      },
      {
        id: 'contraindications',
        title: 'Contraindications & Precautions',
        content:
          'Contraindicated in patients with prostate or breast cancer, nephrosis, and during pregnancy. Use with caution in patients with cardiac, hepatic, or renal disease.',
      },
      {
        id: 'interactions',
        title: 'Interactions',
        content:
          'May enhance the effects of anticoagulants and affect insulin requirements. Inform your healthcare provider of all medications.',
      },
      {
        id: 'side-effects',
        title: 'Adverse Reactions / Side Effects',
        content:
          'Side effects may include acne, fluid retention, changes in libido, and hepatic effects. Women may experience virilization.',
      },
      {
        id: 'pregnancy',
        title: 'Pregnancy & Breastfeeding',
        content:
          'Contraindicated during pregnancy due to potential masculinization of the fetus. Not recommended during breastfeeding.',
      },
      {
        id: 'storage',
        title: 'Storage',
        content:
          'Store at controlled room temperature. Protect from light.',
      },
      {
        id: 'faq',
        title: 'Frequently Asked Questions',
        content:
          'Contact your healthcare provider for specific questions about nandrolone therapy.',
      },
    ],
    relatedProductIds: ['testosterone-cypionate', 'sermorelin-acetate', 'nad-injection'],
    faqs: [
      {
        question: 'I am interested in your compounds, can you recommend a physician for me?',
        answer:
          'Please contact our customer service team for assistance finding healthcare providers.',
      },
      {
        question: 'Where can I find the osmolarity of your product?',
        answer:
          'Osmolarity information is available on the Certificate of Analysis (COA).',
      },
      {
        question: 'I did not see the item I am looking for on your site; does that mean it is unavailable?',
        answer:
          'We offer many compounds not listed. Please contact us for specific formulations.',
      },
      {
        question: 'Where are your ingredients sourced from?',
        answer:
          'All ingredients are sourced from FDA-registered facilities.',
      },
    ],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getRelatedProducts(productIds: string[]): Product[] {
  return products.filter((product) => productIds.includes(product.id));
}
