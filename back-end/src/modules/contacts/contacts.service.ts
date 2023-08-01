import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository:ContactsRepository){}
  async create(data: CreateContactDto, userId:number) {
    return await this.contactsRepository.create(data,userId);
  }

  async findAll() {
    return await this.contactsRepository.findAll();
  }

  async findOne(id: number) {
    const findContact = await this.contactsRepository.findOne(id)

    if(!findContact){
     throw new NotFoundException("Contact not found")
    }
    return findContact
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    const findContact = await this.contactsRepository.findOne(id)

   if(!findContact){
    throw new NotFoundException("Contact not found")
   }
   return this.contactsRepository.update(id, updateContactDto)
  }

  async remove(id: number) {
    const findContact = await this.contactsRepository.findOne(id)

   if(!findContact){
    throw new NotFoundException("Contact not found")
   }
   return this.contactsRepository.delete(id)
  }
}
