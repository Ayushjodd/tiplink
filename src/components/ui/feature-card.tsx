/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Button } from './button'
import { useTheme } from 'next-themes'

interface FeatureProps {
  title: string
  description: string
  image: string
}

const FeatureCard = ({ title, description, image }: FeatureProps) => {
  const { theme } = useTheme();

  return (
    <div>
      <div className={`border rounded-lg shadow-inner hover:shadow-2xl transition-all 
        ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
        <div className="md:p-20">
          <img
            src={image}
            alt="Feature Image"
            className="w-full h-[200px] object-cover"
          />
        </div>
        <div className="w-full p-4">
          <div className="py-4">
            <h1 className={`text-4xl md:text-3xl lg:text-4xl font-bold tracking-tighter 
              bg-gradient-to-b text-transparent bg-clip-text 
              ${theme === 'dark' ? 'from-white to-white/70' : 'from-black to-black/70'}`}>
              {title}
            </h1>
          </div>
          <div className="w-full py-4">
            <p className={`text-lg tracking-tighter 
              ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              {description}
            </p>
          </div>
          <div className="w-full py-2">
            <Button className={`w-full text-lg py-7 
              `}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
