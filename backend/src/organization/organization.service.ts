import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    const name = createOrganizationDto.name;
    const createOrganizationDb = await this.prisma.organization.create({
      data: {
        name: name,
      },
    });
    return createOrganizationDb;
  }

  findAll() {
    return `This action returns all organization`;
  }

  async findOne(id: string) {
    const findOneDb = await this.prisma.organization.findUnique({
      where: { id: id },
    });
    return findOneDb;
  }

  update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  remove(id: string) {
    return `This action removes a #${id} organization`;
  }
}
