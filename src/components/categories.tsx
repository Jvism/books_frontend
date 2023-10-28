'use client'

import React from 'react';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { Category } from '@/types/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from "@/components/ui/select"


interface props {
  categories: Category[]
}

export default function Categories({categories}: props) {
  return (
    <div className="h-11 flex justify-end gap-4 items-center mb-3">
      <button className="font-normal text-sm capitalize text-neutral-400 px-2 py-2">
        {categories[0].name}
      </button>
      <button className="font-normal text-sm capitalize text-neutral-400 px-2 py-2">
        {categories[1].name}
      </button>
      <Select>
        <SelectTrigger className="w-fit capitalize">
          <SelectValue placeholder="Mas categorías"/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categorías</SelectLabel>
            {
              categories.map(category => {
                return (
                  <SelectItem key={category.id} value={category.name} className="capitalize">{category.name}</SelectItem>
                )
              })
            }
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}