"use client"
import { Reveal } from '@/components/Reveal'
import { BackgroundRadialRight } from '../BackgroundRadialRight'
import Link from 'next/link'

export function Contact() {
    return (
        <div className="relative p-4 py-10 md:py-40" id="contacto">
            <BackgroundRadialRight />
            <div className="relative w-full max-w-5xl mx-auto">
                <Reveal>
                    <h2 className="text-5xl font-semibold text-center mb-10">Contáctanos</h2>
                </Reveal>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <form className="w-full md:w-1/2 bg-radialBlack p-8 rounded-lg shadow-lg space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-lg font-semibold text-primaryDark">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-lg font-semibold text-primaryDark">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-lg font-semibold text-primaryDark">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                rows={5}
                                required
                            />
                        </div>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md border border-transparent bg-blueRadial hover:bg-none hover:border-secondary">Contáctanos</Link>
                        </div>
                    </form>
                    <div className="mt-10 md:mt-0 md:ml-10">
                        <Reveal>
                            <h3 className="text-2xl font-semibold text-center md:text-left">Información de Contacto</h3>
                            <p className="mt-4 text-primaryDark text-center md:text-left">
                                Dirección: Ecuador, Otavalo<br />
                                Teléfono: +593982214081<br />
                                Correo Electrónico: info@tnx.com
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
}
