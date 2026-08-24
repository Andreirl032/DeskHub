import { Injectable, NotFoundException } from '@nestjs/common';
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

  // async findAll() {
  //   const findAllDb=this.prisma.organization.findMany({where})
  //   return `This action returns all organization`;
  // }

  async findOne(id: string) {
    const findOneDb = await this.prisma.organization.findUnique({
      where: { id: id },
    });
    if (!findOneDb) {
      throw new NotFoundException('Organization not found');
    }
    return findOneDb;
  }

  async update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    const updateDb = await this.prisma.organization.update({
      where: { id: id },
      data: { name: updateOrganizationDto.name },
    });
    return updateDb;
  }

  async remove(id: string) {
    const deleteOrg = await this.prisma.organization.delete({
      where: { id: id },
    });
    return deleteOrg;
  }
}
