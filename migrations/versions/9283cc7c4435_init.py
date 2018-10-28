"""init

Revision ID: 9283cc7c4435
Revises: 
Create Date: 2018-10-27 22:11:34.004180

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9283cc7c4435'
down_revision = None
branch_labels = ('head',)
depends_on = None


def upgrade():
    op.create_table('kid',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('birth_ts', sa.DateTime(), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )



def downgrade():
    op.drop_table('kid')