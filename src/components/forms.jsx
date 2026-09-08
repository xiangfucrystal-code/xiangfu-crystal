import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SITE } from '../data/site';
import { CATEGORIES } from '../data/catalog';
import { useLanguage, useT } from '../lib/i18n';
import { Eyebrow } from './chrome';

export function FormInquiry() {
  const [params] = useSearchParams();
  const { locale } = useLanguage();
  const t = useT();
  const product = params.get('product') || '';
  const [form, setForm] = useState({ name: '', company: '', email: '', country: '', interest: '', quantity: '', message: product ? `${locale === 'zh' ? '咨询产品' : 'Inquiry for product'} ${product}` : '' });
  const [errors, setErrors] = useState({});
  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = t({ zh: '请填写姓名', en: 'Please enter your name' });
    if (!form.company.trim()) next.company = t({ zh: '请填写公司名称', en: 'Please enter your company' });
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = t({ zh: '请填写有效邮箱', en: 'Please enter a valid email' });
    setErrors(next);
    if (Object.keys(next).length) return;
    const body = `${locale === 'zh' ? '姓名' : 'Name'}: ${form.name}\n${locale === 'zh' ? '公司' : 'Company'}: ${form.company}\nEmail: ${form.email}\n${locale === 'zh' ? '国家' : 'Country'}: ${form.country}\n${locale === 'zh' ? '产品' : 'Product'}: ${form.interest}\n${locale === 'zh' ? '数量' : 'Quantity'}: ${form.quantity}\n\n${form.message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(locale === 'zh' ? '网站产品询盘' : 'Website Product Inquiry')}&body=${encodeURIComponent(body)}`;
  };
  return <form className="form-inquiry" onSubmit={submit} noValidate data-component="form-inquiry">
    {[['name', t({ zh: '姓名', en: 'Name' }), true], ['company', t({ zh: '公司名称', en: 'Company' }), true], ['email', 'Email', true], ['country', t({ zh: '国家/地区', en: 'Country / Region' }), false], ['quantity', t({ zh: '预计数量', en: 'Estimated quantity' }), false]].map(([key, label, required]) => <div className="field" key={key}><label className="field-label" htmlFor={`fi-${key}`}>{label}{required && <span className="req"> *</span>}</label><input id={`fi-${key}`} type={key === 'email' ? 'email' : 'text'} value={form[key]} onChange={update(key)} aria-invalid={!!errors[key]} placeholder={key === 'quantity' ? t({ zh: '例如：10KG / 500 件', en: 'e.g. 10KG / 500 pcs' }) : ''} />{errors[key] && <p className="field-error">{errors[key]}</p>}</div>)}
    <div className="field"><label className="field-label" htmlFor="fi-interest">{t({ zh: '产品分类', en: 'Product interest' })}</label><select id="fi-interest" value={form.interest} onChange={update('interest')}><option value="">{t({ zh: '请选择', en: 'Select' })}</option>{CATEGORIES.map((c) => <option value={t(c.name)} key={c.slug}>{t(c.name)}</option>)}</select></div>
    <div className="field"><label className="field-label" htmlFor="fi-message">{t({ zh: '询盘内容', en: 'Message' })}</label><textarea id="fi-message" value={form.message} onChange={update('message')} placeholder={t({ zh: '请填写产品编号、材质、尺寸、数量、包装或定制要求', en: 'Share product reference, material, size, quantity, packaging or customization requirements' })} /></div>
    <button type="submit" className="btn btn--primary">{t({ zh: '通过邮箱发送询盘', en: 'Send Inquiry by Email' })}</button><p className="field-hint">MOQ {SITE.moq} · {t(SITE.replyPromise)}</p>
  </form>;
}

export function ContactPanel() {
  const t = useT();
  return <aside className="contact-panel" data-component="contact-panel"><Eyebrow gold>{t({ zh: '直接联系', en: 'DIRECT CONTACT' })}</Eyebrow><h2>{t({ zh: '祥福水晶业务团队', en: 'Xiangfu Crystal Sales Team' })}</h2><div className="contact-line"><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div><div className="contact-line"><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp: {SITE.whatsappDisplay}</a></div><div className="contact-line">{t(SITE.address)}</div><div className="contact-line">{t(SITE.hours)}</div><div className="contact-line">MOQ: {SITE.moq}</div></aside>;
}
